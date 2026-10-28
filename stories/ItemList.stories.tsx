import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="ItemList")!;

const meta={title:"Content & records/ItemList",tags:['autodocs'],argTypes:{"items":{"description":"{\n    id: string;\n    title: string;\n    description?: string;\n    icon?: IconName;\n    trailing?: ReactNode;\n    onClick?: () => void;\n  }[]","table":{"type":{"summary":"{\n    id: string;\n    title: string;\n    description?: string;\n    icon?: IconName;\n    trailing?: ReactNode;\n    onClick?: () => void;\n  }[]"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {ItemList} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<ItemList items={[{id:\"flight\",title:\"Flight to Denpasar\",description:\"10 November · 09:30\",icon:\"plane\"}]} />",language:'tsx'},description:{component:"Header-less ruled rows for rails and panels: [16px muted icon] label 13.5/500 (+ quiet meta line) · right-aligned value (mono optional, blank → '—') · one trailing action (IconButton xs ghost). 48px min rows, hairlines, 20px panel gutter; the value drops under the label below 320px. Values stay aligned when only some rows have actions. Long values (account numbers, e-mails) wrap inside a column capped at 60% of the row, so they never squeeze the label.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
