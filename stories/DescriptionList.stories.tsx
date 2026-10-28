import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="DescriptionList")!;
const Component=UI.DescriptionList as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Content & records/DescriptionList",tags:['autodocs'],component:UI.DescriptionList,args:{...{"items":[{"label":"Destination","value":"Bali, Indonesia"},{"label":"Travelers","value":"2 adults"}],"columns":2},},argTypes:{"items":{"description":"{ label: string; value: ReactNode }[]","table":{"type":{"summary":"{ label: string; value: ReactNode }[]"}},"control":"object"},"columns":{"description":"1 | 2 | 3","table":{"type":{"summary":"1 | 2 | 3"}},"control":"object"}},parameters:{docs:{source:{code:"import {DescriptionList} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<DescriptionList items={[{label:\"Destination\",value:\"Bali, Indonesia\"},{label:\"Travelers\",value:\"2 adults\"}]} />",language:'tsx'},description:{component:"Ruled key/value grid (dl/dt/dd): quiet sentence-case keys and strong values that can be nodes (StatusBadge, Avatar + name, mono IDs).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
