
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'],['line'],['allure-playwright']],
  use: {
   
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on-first-retry',
  },

});

