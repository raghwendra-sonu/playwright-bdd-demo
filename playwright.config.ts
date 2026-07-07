import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import './support/hooks';

// UI BDD
const uiTestDir = defineBddConfig({
  paths: ['tests/ui/features/*.feature'],
  require: ['tests/ui/steps/*.steps.ts'],
  outputDir: 'results/ui/bdd-results',
});

// API BDD
const apiTestDir = defineBddConfig({
  paths: ['tests/api/features/*.feature'],
  require: ['tests/api/steps/*.steps.ts'],
  outputDir: 'results/api/bdd-results',
});

export default defineConfig({
  timeout: 60000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 1 : 0,

  reporter: [['list'], ['html'], ['allure-playwright', { resultsDir: 'allure-results' }]],

  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'Chrome',
      testDir: uiTestDir,
      testMatch: /.*\.feature/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        screenshot: 'on',
        video: 'on',
        trace: 'on',
        headless: !!process.env.CI,
        launchOptions: {
          slowMo: 500,
        },
      },
    },

    {
      name: 'Edge',
      testDir: uiTestDir,
      testMatch: /.*\.feature/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'msedge',
        screenshot: 'on',
        video: 'on',
        trace: 'on',
        headless: !!process.env.CI,
        launchOptions: {
          slowMo: 500,
        },
      },
    },

    {
      name: 'API',
      testDir: apiTestDir,
      testMatch: /.*\.feature/,
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
