import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Kbd")!;
const Component=UI.Kbd as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Primitives/Kbd",tags:['autodocs'],component:UI.Kbd,args:{...{"children":"Ctrl K"},},argTypes:{"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"}},parameters:{docs:{source:{code:"import {Kbd} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<Kbd>⌘ K</Kbd>",language:'tsx'},description:{component:"Keyboard key / shortcut hint (mono 10.5px, muted key cap).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
