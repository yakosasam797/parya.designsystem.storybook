import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="PageHeader")!;
const Component=UI.PageHeader as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Content & records/PageHeader",tags:['autodocs'],component:UI.PageHeader,args:{...{"title":"Bookings","description":"Manage every journey in one place.","count":24},},argTypes:{"title":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"description":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"count":{"description":"number","table":{"type":{"summary":"number"}},"control":"number"},"status":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"object"},"actions":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":"object"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Import\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
