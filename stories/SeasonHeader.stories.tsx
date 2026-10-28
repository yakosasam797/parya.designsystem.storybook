import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="SeasonHeader")!;
const Component=UI.SeasonHeader as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Pricing & finance/SeasonHeader",tags:['autodocs'],component:UI.SeasonHeader,args:{...{"name":"Winter season","from":"2026-11-01","to":"2027-02-28"},},argTypes:{"name":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"from":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"to":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:"import {SeasonHeader} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<SeasonHeader name=\"Winter season\" from=\"2026-11-01\" to=\"2027-02-28\" />",language:'tsx'},description:{component:"Season name and dates on one horizontal line, with a tone swatch (peak/high/shoulder/low), compact mono date-range chips (\"20 Dec – 5 Jan\") and a red blackout count; full dates with years, blackout reasons and the optional season rule are in accessible text and hover details. It is RateMatrix's column-group header; use it alone where a season is labelled outside the grid (quote lines, test-rate results).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
