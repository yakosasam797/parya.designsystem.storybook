import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="SegmentedControl")!;
const Component=UI.SegmentedControl as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Forms & validation/SegmentedControl",tags:['autodocs'],component:UI.SegmentedControl,args:{...{"options":[{"value":"list","label":"List","icon":"list"},{"value":"board","label":"Board","icon":"board"}],"value":"list","aria-label":"View","disabled":false},onValueChange:()=>{}},argTypes:{"options":{"description":"{\n    value: string;\n    label: string;\n    icon?: IconName;\n    count?: number;\n    disabled?: boolean;\n  }[]","table":{"type":{"summary":"{\n    value: string;\n    label: string;\n    icon?: IconName;\n    count?: number;\n    disabled?: boolean;\n  }[]"}},"control":"boolean"},"value":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"onValueChange":{"description":"(value: string) => void","table":{"type":{"summary":"(value: string) => void"}},"control":false},"aria-label":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"disabled":{"control":"boolean"}},parameters:{docs:{source:{code:"import {useState} from \"react\";\nimport {SegmentedControl} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nconst [view, setView] = useState(\"list\");\n<SegmentedControl aria-label=\"View\" value={view} onValueChange={setView} options={[{value:\"list\",label:\"List\"},{value:\"board\",label:\"Board\"}]} />",language:'tsx'},description:{component:"2–5 mutually exclusive modes in one subtle track (radius md, 2px inset); active segment white + shadow block; optional icon and mono count. radiogroup semantics, arrow keys select.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
