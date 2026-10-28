import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'tests',timeout:90000,use:{baseURL:'http://127.0.0.1:6008',headless:true},webServer:{command:'npm run preview',url:'http://127.0.0.1:6008',reuseExistingServer:true},reporter:'list'});
