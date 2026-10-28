import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="toast")!;

const meta={title:"Overlays & feedback/toast",tags:['autodocs'],argTypes:{"title":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"options":{"description":"Omit<ToastMessage, \"id\" | \"title\">","table":{"type":{"summary":"Omit<ToastMessage, \"id\" | \"title\">"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {toast, Toaster, ThemeProvider} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\ntoast(\"Booking confirmed\", {tone:\"success\", description:\"The traveler has been notified.\"});\n// Mount <Toaster /> once inside your ThemeProvider.",language:'tsx'},description:{component:"Imperative feedback after an action: toast({ title, description?, tone?, action? }). Renders in the Toaster (bottom-right, 360px), auto-dismisses after 5s, pauses on hover/focus, announced politely (danger assertively).\n\nExperimental. Utility function; the story demonstrates its output. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
