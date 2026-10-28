import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="FormFooter")!;

const meta={title:"Forms & validation/FormFooter",tags:['autodocs'],argTypes:{"sticky":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false},"start":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Action row at the end of a form: right-aligned actions (Cancel, then primary), optional start slot. sticky (default) = 72px translucent bar with shadow sticky at the bottom of the page; sticky={false} on settings pages and inside Modal/Sheet footers. Under 560px of its own width the start slot stacks above the actions; actions keep natural width (a Cancel + primary pair splits the row).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
