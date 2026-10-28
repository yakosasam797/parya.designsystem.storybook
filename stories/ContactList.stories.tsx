import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="ContactList")!;

const meta={title:"Content & records/ContactList",tags:['autodocs'],argTypes:{"items":{"description":"{ label: string; value: string; type: \"email\" | \"phone\" | \"text\" }[]","table":{"type":{"summary":"{ label: string; value: string; type: \"email\" | \"phone\" | \"text\" }[]"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"People to reach for a record: avatar, name, role, Primary tag and Call / Email / WhatsApp pills (tel:, mailto:, wa.me), with a 'View all N contacts' disclosure.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
