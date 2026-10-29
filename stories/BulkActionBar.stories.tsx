import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="BulkActionBar")!;

const meta={title:"Tables & collections/BulkActionBar",tags:['autodocs'],argTypes:{"count":{"description":"number","table":{"type":{"summary":"number"}},"control":false},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"onClear":{"description":"() => void","table":{"type":{"summary":"() => void"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {Button, BulkActionBar} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<BulkActionBar count={3} onClear={clearSelection}><Button onClick={exportSelected}>Export</Button></BulkActionBar>",language:'tsx'},description:{component:"Pink 56px band shown while rows are selected: \"2 vendors selected\" + bulk actions + Clear. Sticky above the TableFooter; gutter-aligned; count announced politely.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
