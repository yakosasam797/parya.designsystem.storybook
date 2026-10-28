import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="HeadingLevelProvider")!;

const meta={title:"Primitives/HeadingLevelProvider",tags:['autodocs'],argTypes:{"level":{"description":"1 | 2 | 3 | 4 | 5 | 6","table":{"type":{"summary":"1 | 2 | 3 | 4 | 5 | 6"}},"control":false},"children":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Sets the heading level that section components (FormSection) use inside a surface. Modal and Sheet already provide 3 because their title is the h2; useHeadingLevel() reads it.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
