import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="DataTable")!;

const meta={title:"Tables & collections/DataTable",tags:['autodocs'],argTypes:{"rows":{"description":"T[]","table":{"type":{"summary":"T[]"}},"control":false},"columns":{"description":"TableColumn<T>[]","table":{"type":{"summary":"TableColumn<T>[]"}},"control":false},"getRowId":{"description":"(row: T) => string","table":{"type":{"summary":"(row: T) => string"}},"control":false},"caption":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"selected":{"description":"string[]","table":{"type":{"summary":"string[]"}},"control":false},"onSelectionChange":{"description":"(selected: string[]) => void","table":{"type":{"summary":"(selected: string[]) => void"}},"control":false},"emptyTitle":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"sort":{"description":"SortState | null","table":{"type":{"summary":"SortState | null"}},"control":false},"onSortChange":{"description":"(sort: SortState) => void","table":{"type":{"summary":"(sort: SortState) => void"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {Money, DataTable} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<DataTable rows={bookings} getRowId={row => row.id} caption=\"Recent bookings\"\n  columns={[{id:\"name\",header:\"Booking\",render:row=>row.name},{id:\"total\",header:\"Total\",align:\"right\",render:row=><Money value={row.amount}/>}]} />",language:'tsx'},description:{component:"A semantic table with sorting, controlled row selection, and responsive overflow.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
