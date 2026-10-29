import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="TextLink")!;

const meta={title:"Primitives/TextLink",tags:['autodocs'],argTypes:{},parameters:{controls:{disable:true},docs:{source:{code:"import {TextLink} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<TextLink href=\"https://app.paper.design/file/01M5KKMF33S23DNN84NAWWBTJR\">Open Paper library</TextLink>",language:'tsx'},description:{component:"Inline teal link, underline on hover; external opens a new tab with an external-link icon.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
