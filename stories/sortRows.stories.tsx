import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="sortRows")!;

const meta={title:"Tables & collections/sortRows",tags:['autodocs'],argTypes:{"rows":{"description":"T[]","table":{"type":{"summary":"T[]"}},"control":false},"accessor":{"description":"(row: T) => SortValue","table":{"type":{"summary":"(row: T) => SortValue"}},"control":false},"direction":{"description":"\"asc\" | \"desc\"","table":{"type":{"summary":"\"asc\" | \"desc\""}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {useState} from \"react\";\nimport {Stack, Money, sortRows, SortState, SortMenu} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nfunction SortControlsDemo() {\r\n  const [value, setValue] = useState<SortState>({\r\n    id: \"name\",\r\n    direction: \"asc\",\r\n  });\r\n  const rows = [\r\n    { name: \"Vendor 12\", balance: 8500 },\r\n    { name: \"Vendor 2\", balance: 12000 },\r\n    { name: \"Vendor 1\", balance: 3000 },\r\n  ];\r\n  const sorted = sortRows(\r\n    rows,\r\n    (row) => (value.id === \"balance\" ? row.balance : row.name),\r\n    value.direction,\r\n  );\r\n  return (\r\n    <Stack>\r\n      <SortMenu\r\n        fields={[\r\n          { id: \"name\", label: \"Name\" },\r\n          { id: \"balance\", label: \"Balance\" },\r\n        ]}\r\n        value={value}\r\n        onValueChange={setValue}\r\n      />\r\n      <ul>\r\n        {sorted.map((row) => (\r\n          <li key={row.name}>\r\n            {row.name}: <Money value={row.balance} />\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </Stack>\r\n  );\r\n}",language:'tsx'},description:{component:"Stable sorted copy: en-IN numeric-aware collation for strings, numbers numerically, Dates and ISO date strings chronologically, empty values last. Accepts a DataTable SortState or a SortMenu value.\n\nExperimental. Utility function; the story demonstrates its output. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
