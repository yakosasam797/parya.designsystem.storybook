import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="TabBar")!;

const meta={title:"Shell & navigation/TabBar",tags:['autodocs'],argTypes:{"items":{"description":"TabItem[]","table":{"type":{"summary":"TabItem[]"}},"control":false},"value":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"onValueChange":{"description":"(value: string) => void","table":{"type":{"summary":"(value: string) => void"}},"control":false},"aria-label":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"variant":{"description":"\"primary\" | \"secondary\"","table":{"type":{"summary":"\"primary\" | \"secondary\""}},"control":false},"showZeroCounts":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {useState} from \"react\";\nimport {TabBar} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nconst [tab, setTab] = useState(\"bookings\");\n<TabBar aria-label=\"Customer records\" value={tab} onValueChange={setTab} items={[{value:\"bookings\",label:\"Bookings\",count:12,content:<BookingList/>},{value:\"travelers\",label:\"Travelers\",content:<TravelerList/>}]} />",language:'tsx'},description:{component:"Use for page and record sections. Pink marks selection in both primary (44px) and secondary (40px). Avoid settings section forms → SettingsPageTemplate nav.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
