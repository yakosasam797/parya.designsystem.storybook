import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="StatusChip")!;
const Component=UI.StatusChip as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Primitives/StatusChip",tags:['autodocs'],component:UI.StatusChip,args:{...{"children":"Confirmed","tone":"success","dot":true,"size":"md"},},argTypes:{"tone":{"description":"StatusTone","table":{"type":{"summary":"StatusTone"}},"control":"text"},"dot":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":"boolean"},"size":{"description":"\"sm\" | \"md\"","table":{"type":{"summary":"\"sm\" | \"md\""}},"control":{"type":"select"},"options":["sm","md"]},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"}},parameters:{docs:{source:{code:"import {StatusChip} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<StatusChip tone=\"success\">Confirmed</StatusChip>",language:'tsx'},description:{component:"28px status pill with tone colours and a leading dot (success, warning, danger, info, neutral).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
