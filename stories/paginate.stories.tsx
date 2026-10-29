import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="paginate")!;

const meta={title:"Tables & collections/paginate",tags:['autodocs'],argTypes:{"rows":{"description":"T[]","table":{"type":{"summary":"T[]"}},"control":false},"page":{"description":"number","table":{"type":{"summary":"number"}},"control":false},"pageSize":{"description":"number","table":{"type":{"summary":"number"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {useState} from \"react\";\nimport {Stack, Pagination, pageCount, paginate} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\nfunction PaginateDemo() {\r\n  const [page, setPage] = useState(1);\r\n  const rows = [\r\n    \"Booking 1\",\r\n    \"Booking 2\",\r\n    \"Booking 3\",\r\n    \"Booking 4\",\r\n    \"Booking 5\",\r\n  ];\r\n  const visible = paginate(rows, page, 2);\r\n  return (\r\n    <Stack>\r\n      <ul>\r\n        {visible.map((row) => (\r\n          <li key={row}>{row}</li>\r\n        ))}\r\n      </ul>\r\n      <Pagination\r\n        page={page}\r\n        pageCount={pageCount(rows.length, 2)}\r\n        onPageChange={setPage}\r\n      />\r\n    </Stack>\r\n  );\r\n}",language:'tsx'},description:{component:"Rows of a 1-based page, clamped to the valid range. Pair with TableFooter (and pageCount for the page count).\n\nExperimental. Utility function; the story demonstrates its output. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
