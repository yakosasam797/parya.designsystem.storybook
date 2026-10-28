import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="TextArea")!;
const Component=UI.TextArea as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Forms & validation/TextArea",tags:['autodocs'],component:UI.TextArea,args:{...{"label":"Special requests","value":"","placeholder":"Dietary needs or room preferences","optional":true,"rows":3,"resize":"vertical"},},argTypes:{"resize":{"description":"\"vertical\" | \"none\"","table":{"type":{"summary":"\"vertical\" | \"none\""}},"control":{"type":"select"},"options":["vertical","none"]},"onValueChange":{"description":"(value: string) => void","table":{"type":{"summary":"(value: string) => void"}},"control":false},"label":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"},"hint":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"error":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"optional":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":"boolean"},"span":{"description":"\"full\"","table":{"type":{"summary":"\"full\""}},"control":{"type":"select"},"options":["full"]}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Labelled multi-line text input, vertically resizable by default; focused editors can disable resizing while long text scrolls inside the field. Same frame as TextField.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
