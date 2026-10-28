import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="StackCell")!;
const Component=UI.StackCell as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Tables & collections/StackCell",tags:['autodocs'],component:UI.StackCell,args:{...{"primary":"Bali, Indonesia","secondary":"5 nights · 2 adults"},},argTypes:{"primary":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"},"secondary":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Two-line cell: primary 13.5px over a 12.5px muted secondary line; mono option for references.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
