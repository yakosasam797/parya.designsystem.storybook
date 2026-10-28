import { readFile, writeFile, mkdir } from "node:fs/promises";
import { controls } from "./control-configs.mjs";
import { iconNames } from "@parya/design-system";
let components;
try {
  components = JSON.parse(
    await readFile(
      "../parya.designsystem.code/site/src/generated/components.json",
      "utf8",
    ),
  );
} catch {
  throw new Error(
    "Build the code repository first: npm run build. Clone both repositories beside each other.",
  );
}
await mkdir("stories", { recursive: true });
for (const c of components) {
  const args = controls[c.name];
  const argTypes = {};
  const requiredHandlers = c.props
    .filter((p) => p.required && p.name.startsWith("on"))
    .map((p) => `${p.name}:()=>{}`)
    .join(",");
  for (const prop of c.props) {
    const literals =
      prop.type === "IconName"
        ? [...iconNames]
        : [...prop.type.matchAll(/"([^\"]+)"/g)].map((m) => m[1]);
    const editable =
      args && !(prop.name.startsWith("on") || prop.type.includes("=>"));
    argTypes[prop.name] = {
      description: prop.type,
      table: { type: { summary: prop.type } },
      control: !editable
        ? false
        : literals.length
          ? { type: "select" }
          : prop.type.includes("boolean")
            ? "boolean"
            : prop.type.startsWith("number")
              ? "number"
              : prop.type.startsWith("string") ||
                  typeof args?.[prop.name] === "string"
                ? "text"
                : "object",
      ...(editable && literals.length ? { options: literals } : {}),
    };
  }
  if (args?.disabled !== undefined) argTypes.disabled = { control: "boolean" };
  const source = `import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name===${JSON.stringify(c.name)})!;
${
  args
    ? `const Component=UI.${c.name} as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}`
    : ""
}
const meta={title:${JSON.stringify(c.category + "/" + c.name)},tags:['autodocs'],${args ? `component:UI.${c.name},args:{...${JSON.stringify(args)},${requiredHandlers}},` : ""}argTypes:${JSON.stringify(argTypes)},parameters:{${args ? "" : "controls:{disable:true},"}docs:{source:{code:${JSON.stringify(c.usage)},language:'tsx'},description:{component:${JSON.stringify(c.description + "\n\nExperimental. " + (c.kind === "utility" ? "Utility function; the story demonstrates its output. " : "") + "See the documentation website for the full API and Paper guidance.")}}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:${args ? "ControlledStory" : "()=> <example.Demo/>"}};
${["FilterMenu", "SortMenu"].includes(c.name) ? "export const Compact:Story={args:{compact:true},render:ControlledStory};\nexport const Disabled:Story={args:{disabled:true},render:ControlledStory};\n" : ""}${c.name === "FilterMenu" ? "export const AllFilterModes:Story={render:()=> <example.Demo/>};\n" : ""}${c.name === "FilterChips" ? "export const Empty:Story={args:{value:{}},render:ControlledStory};\n" : ""}
${c.name === "Button" ? "export const Loading:Story={args:{loading:true},render:ControlledStory};\nexport const Disabled:Story={args:{disabled:true},render:ControlledStory};\nexport const AllVariants:Story={render:()=> <example.Demo/>};\n" : ""}${c.name === "TextField" ? "export const Error:Story={args:{error:'Traveler name is required.',value:''},render:ControlledStory};\nexport const Disabled:Story={args:{disabled:true},render:ControlledStory};\n" : ""}`;
  await writeFile(`stories/${c.name}.stories.tsx`, source.trimEnd() + "\n");
}
console.log(
  `Synchronized ${components.length} Storybook references; ${Object.keys(controls).length} have prop controls.`,
);
