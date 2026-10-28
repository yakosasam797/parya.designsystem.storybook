import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="Breadcrumbs")!;

const meta={title:"Shell & navigation/Breadcrumbs",tags:['autodocs'],argTypes:{"items":{"description":"{ label: string; href?: string }[]","table":{"type":{"summary":"{ label: string; href?: string }[]"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"\"CRM › Vendors\" trail in the topbar: 13.5px, links secondary, current page 600 with aria-current=page. When the trail does not fit, crumbs collapse from the front into a \"…\" button whose menu lists (and navigates to) the hidden crumbs; the parent goes before the current page is truncated, so the current page always gets the most room.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
