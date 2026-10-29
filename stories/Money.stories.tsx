import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="Money")!;
const Component=UI.Money as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Content & records/Money",tags:['autodocs'],component:UI.Money,args:{...{"value":248000,"currency":"INR","locale":"en-IN","decimals":0,"tone":"default"},},argTypes:{"value":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"currency":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"locale":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"decimals":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"tone":{"description":"\"default\" | \"muted\" | \"success\" | \"danger\"","table":{"type":{"summary":"\"default\" | \"muted\" | \"success\" | \"danger\""}},"control":{"type":"select"},"options":["default","muted","success","danger"]}},parameters:{docs:{source:{code:"import {Money} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<Money value={248000} currency=\"INR\" />",language:'tsx'},description:{component:"Money in mono tabular figures with Indian grouping via @paryatech/format (₹4,20,100); paise only when non-zero unless decimals=\"always\"; success/danger/muted tones; sizes sm (12) · md (13.5, default) · lg (15) · xl (fluid 18–22) from the type scale; compact notation (₹4.2L, exact amount in the tooltip and for screen readers); struck for a previous price (<s>, announced \"was ₹…\"). Experimental `masked`: \"••••\" announced \"Amount hidden\" for a hide-amounts eye button (privacy screen, not cost hiding).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
