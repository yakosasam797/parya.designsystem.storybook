import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Modal")!;

const meta={title:"Overlays & feedback/Modal",tags:['autodocs'],argTypes:{"open":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false},"onOpenChange":{"description":"(open: boolean) => void","table":{"type":{"summary":"(open: boolean) => void"}},"control":false},"title":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"description":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"footer":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"trigger":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"size":{"description":"\"sm\" | \"md\" | \"lg\"","table":{"type":{"summary":"\"sm\" | \"md\" | \"lg\""}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Medium content that fits without scrolling. Header → body → right-aligned footer. Source sm width 480px. Avoid deep previews and long forms → full page.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
