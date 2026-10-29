import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="filterRows")!;

const meta={title:"Tables & collections/filterRows",tags:['autodocs'],argTypes:{"rows":{"description":"T[]","table":{"type":{"summary":"T[]"}},"control":false},"value":{"description":"FilterValue","table":{"type":{"summary":"FilterValue"}},"control":false},"accessors":{"description":"Record<string, (row: T) => string | string[]>","table":{"type":{"summary":"Record<string, (row: T) => string | string[]>"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {filterRows} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nfunction FilterRowsDemo() {\r\n  const rows = [\r\n    { name: \"Resort\", services: [\"hotel\", \"activity\"], status: \"active\" },\r\n    { name: \"Transfers\", services: [\"transport\"], status: \"active\" },\r\n    { name: \"Archived hotel\", services: [\"hotel\"], status: \"inactive\" },\r\n  ];\r\n  const filtered = filterRows(\r\n    rows,\r\n    { service: [\"hotel\", \"activity\"], status: [\"active\"] },\r\n    { service: (row) => row.services, status: (row) => row.status },\r\n  );\r\n  return <p>Matching vendors: {filtered.map((row) => row.name).join(\", \")}</p>;\r\n}",language:'tsx'},description:{component:"Applies a FilterValue to client-side rows: AND across groups, OR within a group. Groups without an accessor or selected values are ignored.\n\nExperimental. Utility function; the story demonstrates its output. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
