import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="PriceChip")!;
const Component=UI.PriceChip as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Pricing & finance/PriceChip",tags:['autodocs'],component:UI.PriceChip,args:{...{"value":12500,"currency":"INR"},},argTypes:{"value":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"currency":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"locale":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"decimals":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"tone":{"description":"\"default\" | \"muted\" | \"success\" | \"danger\"","table":{"type":{"summary":"\"default\" | \"muted\" | \"success\" | \"danger\""}},"control":{"type":"select"},"options":["default","muted","success","danger"]}},parameters:{docs:{source:{code:"import {PriceChip} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<PriceChip value={12500} />",language:'tsx'},description:{component:"A price with its change against a previous version: mono INR amount + a toned pill \"↑ 8.6%\" / \"↓ 4.2%\" / \"–\" / \"New\". Tone follows goodDirection (default \"down\" for vendor costs: up = warning, down = success). Screen readers hear \"up 8.6% from v3 (₹7,000)\". Internal pricing only.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
