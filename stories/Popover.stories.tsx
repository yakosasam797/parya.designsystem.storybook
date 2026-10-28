import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Popover")!;

const meta={title:"Overlays & feedback/Popover",tags:['autodocs'],argTypes:{"trigger":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"open":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false},"onOpenChange":{"description":"(open: boolean) => void","table":{"type":{"summary":"(open: boolean) => void"}},"control":false},"align":{"description":"\"start\" | \"center\" | \"end\"","table":{"type":{"summary":"\"start\" | \"center\" | \"end\""}},"control":false},"label":{"description":"string","table":{"type":{"summary":"string"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Anchored panel for a small task beside its trigger, with optional title header (close button) and a footer band. Escape and outside click close; focus returns to the trigger by default. Optional lifecycle handlers support a compact picker beside an external search without moving that input into the panel.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
