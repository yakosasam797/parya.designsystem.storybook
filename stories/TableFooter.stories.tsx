import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="TableFooter")!;
const Component=UI.TableFooter as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Tables & collections/TableFooter",tags:['autodocs'],component:UI.TableFooter,args:{...{"page":1,"pageSize":10,"total":42},onPageChange:()=>{}},argTypes:{"page":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"pageSize":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"total":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"onPageChange":{"description":"(page: number) => void","table":{"type":{"summary":"(page: number) => void"}},"control":false}},parameters:{docs:{source:{code:"import {TableFooter} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<TableFooter page={1} pageSize={10} total={3} onPageChange={setPage} />",language:'tsx'},description:{component:"Footer under a DataTable: mono \"Showing 1–12 of 12 vendors\" (en-IN numbers, \"No vendors\" at 0) + Pagination on the right. `sticky` docks it to the bottom of its scroll parent (surface background, top rule) for record tabs.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
