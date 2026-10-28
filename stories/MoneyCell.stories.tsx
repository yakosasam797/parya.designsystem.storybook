import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="MoneyCell")!;
const Component=UI.MoneyCell as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Tables & collections/MoneyCell",tags:['autodocs'],component:UI.MoneyCell,args:{...{"value":248000,"due":186000},},argTypes:{"value":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"currency":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"locale":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"decimals":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"tone":{"description":"\"default\" | \"muted\" | \"success\" | \"danger\"","table":{"type":{"summary":"\"default\" | \"muted\" | \"success\" | \"danger\""}},"control":{"type":"select"},"options":["default","muted","success","danger"]},"due":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Right-aligned mono amount via @paryatech/format (\"₹3,00,000\", Indian grouping, no \".00\") with an optional note line (\"₹30,000 due\").\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
