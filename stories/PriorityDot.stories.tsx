import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="PriorityDot")!;
const Component=UI.PriorityDot as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Boards & workflow/PriorityDot",tags:['autodocs'],component:UI.PriorityDot,args:{...{"priority":"high"},},argTypes:{"priority":{"description":"\"low\" | \"medium\" | \"high\" | \"urgent\"","table":{"type":{"summary":"\"low\" | \"medium\" | \"high\" | \"urgent\""}},"control":{"type":"select"},"options":["low","medium","high","urgent"]}},parameters:{docs:{source:{code:"import {PriorityDot} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<PriorityDot priority=\"high\" />",language:'tsx'},description:{component:"Accessible named priority marker. Default preserves8px urgent/high/medium/low vocabulary. Card appearance uses a solid10px marker and is selected by standard KanbanCard; name and tooltip always identify the level.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
