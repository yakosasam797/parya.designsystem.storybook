import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="toast")!;

const meta={title:"Overlays & feedback/toast",tags:['autodocs'],argTypes:{},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Imperative feedback after an action: toast({ title, description?, tone?, action? }). Renders in the Toaster (bottom-right, 360px), auto-dismisses after 5s, pauses on hover/focus, announced politely (danger assertively).\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
