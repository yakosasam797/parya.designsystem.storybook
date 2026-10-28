import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="DateText")!;
const Component=UI.DateText as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Content & records/DateText",tags:['autodocs'],component:UI.DateText,args:{...{"value":"2026-11-10","format":"long","locale":"en-IN"},},argTypes:{"value":{"description":"string | Date","table":{"type":{"summary":"string | Date"}},"control":"text"},"locale":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"format":{"description":"\"short\" | \"medium\" | \"long\"","table":{"type":{"summary":"\"short\" | \"medium\" | \"long\""}},"control":{"type":"select"},"options":["short","medium","long"]},"timeZone":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"A civil date (YYYY-MM-DD, never timezone-shifted) or an instant (IST) in a <time> element: '12 Dec 2026', with optional time or relative ('3 months ago').\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
