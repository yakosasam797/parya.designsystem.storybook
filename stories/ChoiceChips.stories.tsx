import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="ChoiceChips")!;
const Component=UI.ChoiceChips as unknown as ComponentType<Record<string,unknown>>;
function ControlledStory(){const [args,update]=useArgs();return <Component {...args} onValueChange={(value:unknown)=>update({value})} onCheckedChange={(checked:boolean)=>update({checked})} onCountryCodeChange={(countryCode:string)=>update({countryCode})} onPageChange={(page:number)=>update({page})}/>}
const meta={title:"Forms & validation/ChoiceChips",tags:['autodocs'],component:UI.ChoiceChips,args:{...{"options":[{"value":"hotel","label":"Hotel"},{"value":"transport","label":"Transport"},{"value":"activity","label":"Activity"}],"value":["hotel"],"aria-label":"Services","multiple":true,"disabled":false},onValueChange:()=>{}},argTypes:{"options":{"description":"{\n    value: string;\n    label: string;\n    icon?: IconName;\n    disabled?: boolean;\n  }[]","table":{"type":{"summary":"{\n    value: string;\n    label: string;\n    icon?: IconName;\n    disabled?: boolean;\n  }[]"}},"control":"boolean"},"value":{"description":"string[]","table":{"type":{"summary":"string[]"}},"control":"text"},"onValueChange":{"description":"(value: string[]) => void","table":{"type":{"summary":"(value: string[]) => void"}},"control":false},"multiple":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":"boolean"},"disabled":{"control":"boolean"},"aria-label":{"description":"string","table":{"type":{"summary":"string"}},"control":"text"}},parameters:{docs:{source:{code:example.code,language:'tsx'},description:{component:"Soft-rect toggle chips (32px, radius sm, 12.5/600, optional icon). Pressed = pink soft bg + pink border + pink text. multiple (default) = group of aria-pressed buttons; multiple={false} = radiogroup with arrow keys.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:ControlledStory};
