import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Checkbox")!;
const Component=UI.Checkbox as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Primitives/Checkbox",tags:['autodocs'],component:UI.Checkbox,args:{...{"checked":false,"label":"Select travelers","description":"Includes every traveler in this booking.","disabled":false},},argTypes:{"checked":{"description":"boolean | \"indeterminate\"","table":{"type":{"summary":"boolean | \"indeterminate\""}},"control":{"type":"select"},"options":["indeterminate"]},"onCheckedChange":{"description":"(checked: boolean) => void","table":{"type":{"summary":"(checked: boolean) => void"}},"control":false},"label":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"},"description":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"disabled":{"control":"boolean"},"id":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"name":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"aria-label":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:"import {useState} from \"react\";\nimport {Checkbox} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nconst [checked, setChecked] = useState(false);\n<Checkbox checked={checked} onCheckedChange={setChecked} label=\"Select all travelers\" />",language:'tsx'},description:{component:"18px checkbox (pink when checked/indeterminate) with optional label and description.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
