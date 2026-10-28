import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="StageLabel")!;
const Component=UI.StageLabel as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Boards & workflow/StageLabel",tags:['autodocs'],component:UI.StageLabel,args:{...{"children":"Awaiting confirmation","tone":"warning"},},argTypes:{"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"text"},"tone":{"description":"StatusTone","table":{"type":{"summary":"StatusTone"}},"control":"text"}},parameters:{docs:{source:{code:"import {StageLabel} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<StageLabel tone=\"warning\">Awaiting confirmation</StageLabel>",language:'tsx'},description:{component:"8px tone dot + label for a workspace-configurable stage (New, Quoting, Options sent, Vouchers pending). md 13.5/600 for column headers; sm 12.5/500 for table cells and previews. Takes the board column ({ label, tone }).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
