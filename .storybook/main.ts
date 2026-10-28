import type {StorybookConfig} from '@storybook/react-vite';
import {fileURLToPath,URL} from 'node:url';
const config:StorybookConfig={
 stories:['../stories/**/*.stories.tsx'],
 addons:['@storybook/addon-docs','@storybook/addon-a11y'],
 framework:'@storybook/react-vite',
 docs:{defaultName:'Docs'},
 core:{disableTelemetry:true},
 async viteFinal(config){
  // The local library is linked beside this repo. Use a single React instance.
  config.resolve={...config.resolve,dedupe:['react','react-dom'],alias:{...config.resolve?.alias,react:fileURLToPath(new URL('../node_modules/react',import.meta.url)),'react-dom':fileURLToPath(new URL('../node_modules/react-dom',import.meta.url))}};
  config.server={...config.server,fs:{allow:[fileURLToPath(new URL('../..',import.meta.url))]}};
  return config;
 }
};
export default config;
