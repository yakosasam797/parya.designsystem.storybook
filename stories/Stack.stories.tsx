import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Stack")!;

const meta={title:"Primitives/Stack",tags:['autodocs'],argTypes:{"direction":{"description":"\"row\" | \"column\"","table":{"type":{"summary":"\"row\" | \"column\""}},"control":false},"gap":{"description":"\"1\" | \"2\" | \"3\" | \"4\" | \"6\" | \"8\"","table":{"type":{"summary":"\"1\" | \"2\" | \"3\" | \"4\" | \"6\" | \"8\""}},"control":false},"align":{"description":"\"start\" | \"center\" | \"end\" | \"stretch\"","table":{"type":{"summary":"\"start\" | \"center\" | \"end\" | \"stretch\""}},"control":false},"wrap":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {Stack, Button} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<Stack direction=\"row\" gap=\"3\"><Button>Cancel</Button><Button variant=\"primary\">Save</Button></Stack>",language:'tsx'},description:{component:"Flex layout for a few children inside a region: column (default) or row, gap from the space scale (--pt-space-*), align, justify, wrap; renders div, ul or ol. Classes only, no inline styles.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
