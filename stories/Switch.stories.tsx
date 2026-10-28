import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Switch")!;
const Component=UI.Switch as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Primitives/Switch",tags:['autodocs'],component:UI.Switch,args:{...{"checked":true,"label":"Booking notifications","description":"Apply changes immediately.","disabled":false},onCheckedChange:()=>{}},argTypes:{"checked":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":"boolean"},"onCheckedChange":{"description":"(checked: boolean) => void","table":{"type":{"summary":"(checked: boolean) => void"}},"control":false},"label":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"},"description":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"disabled":{"control":"boolean"},"id":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"name":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"aria-label":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"On/off toggle for settings that take effect immediately.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
