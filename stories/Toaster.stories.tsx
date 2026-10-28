import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Toaster")!;

const meta={title:"Overlays & feedback/Toaster",tags:['autodocs'],argTypes:{},parameters:{controls:{disable:true},docs:{source:{code:"import {Toaster, ThemeProvider} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<ThemeProvider theme=\"light\"><App /><Toaster /></ThemeProvider>",language:'tsx'},description:{component:"Mount point that renders toasts raised with toast(). Portalled bottom-right stack at --pt-z-toast.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
