import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="PersonInline")!;
const Component=UI.PersonInline as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Content & records/PersonInline",tags:['autodocs'],component:UI.PersonInline,args:{...{"name":"Aarav Sharma"},},argTypes:{"name":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"},"src":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Avatar (xs 20 / sm 26, person-pink by default) + name 13.5/600 (+ optional micro subtitle) inline, for detail lists: Owner, Assignee, Created by. Decorative avatar; the name is the text.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
