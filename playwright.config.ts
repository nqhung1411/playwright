import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  retries: 1,
  use: {
    // baseURL: 'https://dummyapi.io/data/v1/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on'
  },
};
export default config;
