import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Checklist")!;

const meta={title:"Content & records/Checklist",tags:['autodocs'],argTypes:{"items":{"description":"{ id: string; label: string; checked: boolean; disabled?: boolean }[]","table":{"type":{"summary":"{ id: string; label: string; checked: boolean; disabled?: boolean }[]"}},"control":false},"onCheckedChange":{"description":"(id: string, checked: boolean) => void","table":{"type":{"summary":"(id: string, checked: boolean) => void"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Setup checklist: title with a right-aligned '2 of 5 done' count, full-width progress bar under the header, check-circle / circle-dashed items and an action per open item. Framed as its own card by default (no Panel needed); inside a Panel body the frame drops.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
