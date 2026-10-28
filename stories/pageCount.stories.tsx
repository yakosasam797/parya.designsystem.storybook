import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="pageCount")!;

const meta={title:"Tables & collections/pageCount",tags:['autodocs'],argTypes:{"total":{"description":"number","table":{"type":{"summary":"number"}},"control":false},"pageSize":{"description":"number","table":{"type":{"summary":"number"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {useState} from \"react\";\nimport {Stack, Pagination, pageCount, paginate} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nfunction PaginateDemo() {\n  const [page, setPage] = useState(1);\n  const rows = [\n    \"Booking 1\",\n    \"Booking 2\",\n    \"Booking 3\",\n    \"Booking 4\",\n    \"Booking 5\",\n  ];\n  const visible = paginate(rows, page, 2);\n  return (\n    <Stack>\n      <ul>\n        {visible.map((row) => (\n          <li key={row}>{row}</li>\n        ))}\n      </ul>\n      <Pagination\n        page={page}\n        pageCount={pageCount(rows.length, 2)}\n        onPageChange={setPage}\n      />\n    </Stack>\n  );\n}",language:'tsx'},description:{component:"Return the number of pages for a nonnegative total and a positive integer page size. Empty collections have zero pages.\n\nExperimental. Utility function; the story demonstrates its output. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
