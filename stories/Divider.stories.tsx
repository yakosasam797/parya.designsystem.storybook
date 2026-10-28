import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Divider")!;

const meta={title:"Primitives/Divider",tags:['autodocs'],argTypes:{},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"1px hairline separator, horizontal or vertical.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
