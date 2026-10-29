import type {Meta,StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';
import {useArgs} from 'storybook/preview-api';
import * as UI from '@parya/design-system';
import {examples} from '@parya/design-system/examples';

const example=examples.find(e=>e.name==="Menu")!;

const meta={title:"Overlays & feedback/Menu",tags:['autodocs'],argTypes:{"trigger":{"description":"ReactNode","table":{"type":{"summary":"ReactNode"}},"control":false},"items":{"description":"MenuItem[]","table":{"type":{"summary":"MenuItem[]"}},"control":false},"label":{"description":"string","table":{"type":{"summary":"string"}},"control":false}},parameters:{controls:{disable:true},docs:{source:{code:"import {Button, Menu} from \"@parya/design-system\";\nimport \"@parya/design-system/styles.css\";\n\n<Menu label=\"Booking actions\" trigger={<Button>Actions</Button>} items={[{id:\"copy\",label:\"Copy reference\",icon:\"copy\",onSelect:copyReference}]} />",language:'tsx'},description:{component:"Action menu from a trigger. Items are data (MenuItem[]): icon + label, optional description (account-style rich rows), shortcut hint, trailing chevron for rows that open another page (`navigates`), labels as overline group headings, checkbox items and radio groups with a leading check column, and an optional non-interactive `header` (identity block). Destructive items are always moved to a final red group behind an automatic separator.\n\nExperimental. See the documentation website for the full API and Paper guidance."}}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Default:Story={render:()=> <example.Demo/>};
