import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';
const example=examples.find(e=>e.name==="FileDropzone")!;

const meta={title:"Content & records/FileDropzone",tags:['autodocs'],argTypes:{"label":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"description":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"accept":{"description":"string","table":{"type":{"summary":"string"}},"control":false},"multiple":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false},"disabled":{"description":"boolean","table":{"type":{"summary":"boolean"}},"control":false},"maxBytes":{"description":"number","table":{"type":{"summary":"number"}},"control":false},"onFiles":{"description":"(files: File[]) => void","table":{"type":{"summary":"(files: File[]) => void"}},"control":false},"onError":{"description":"(message: string) => void","table":{"type":{"summary":"(message: string) => void"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:example.code,language:'tsx'},description:{component:"Single-file drop target: dashed card with upload icon, 'Drop file or Browse' and accepted-types hint; selected state shows name, 'Ready to import · size', Replace and remove. Rejects files outside accept.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
