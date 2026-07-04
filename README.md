# Playwright BDD Automation Framework

## Overview

This repository demonstrates an end-to-end automation framework built using modern automation practices and design patterns.

### Technology Stack

- Playwright
- Playwright-BDD
- TypeScript
- Page Object Model (POM)
- Allure Reporting
- GitHub Actions CI/CD
- API & UI Automation

The framework has been developed with a strong focus on:

- Scalability
- Maintainability
- Readability
- Reusability
- CI/CD Integration
- Reporting and Traceability

The framework showcases both UI and API automation scenarios using a clean, scalable, and maintainable design.

---

# Automated Scenarios

## UI Automation

### Application

Service NSW

### Scenario: Check Vehicle Registration

#### Test Flow

1. Navigate to https://www.service.nsw.gov.au
2. Click **Check Rego**
3. Click **Check Online**
4. Enter registration plate number **ABC123**
5. Accept Terms and Conditions
6. Click **Check Registration**
7. Validate the returned error message

#### Expected Validation

```text
No vehicles found for ABC123
```

---

## API Automation

### Application

Open Brewery DB

### Endpoint

```text
https://api.openbrewerydb.org/v1/breweries/random
```

### Scenario: Random Brewery Validation

#### Test Flow

1. Retrieve 2 random brewery records
2. Validate API response status code
3. Traverse the JSON response
4. Validate and print:
   - Brewery Name
   - Address 1

---

# Framework Architecture

The framework follows a layered architecture to separate business logic from test implementation.

```text
Feature Files
       │
       ▼
Step Definitions
       │
       ▼
Page Objects / API Classes
       │
       ▼
Playwright Engine
       │
       ▼
Application Under Test
```

### Design Principles

- BDD implementation using Playwright-BDD
- Page Object Model pattern
- Separation of test logic from business logic
- Reusable page and API components
- Maintainable and scalable folder structure
- CI/CD-ready execution
- Enhanced reporting using Allure
- Supports local and GitHub-hosted execution

---

# Framework Structure

```text
tests
│
├── ui
│   ├── features
│   │   └── checkVehicleRegistration.feature
│   │
│   ├── pages
│   │   └── CheckVehicleRegistrationPage.ts
│   │
│   └── steps
│       └── checkVehicleRegistration.steps.ts
│
└── api
    ├── features
    │   └── retrieveRandomBreweries.feature
    │
    ├── pages
    │   └── RandomBreweryPage.ts
    │
    ├── models
    │   └── Brewery.ts
    │
    └── steps
        └── randomBrewery.steps.ts

.github
│
└── workflows
    └── github-actions.yml

allure-results
allure-report

playwright.config.ts
bdd.config.ts
package.json
tsconfig.json
README.md
```

---

# Setup Instructions

## Prerequisites

Ensure the following software is installed on your machine.

### Node.js

Verify installation:

```bash
node -v
```

Recommended Version:

```text
Node.js v20 or later
```

### npm

Verify installation:

```bash
npm -v
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Install Allure Command Line

```bash
npm install -g allure-commandline
```

---

## Clone Repository

```bash
git clone https://github.com/raghwendra-sonu/playwright-bdd-demo.git
```

Navigate to the project folder:

```bash
cd playwright-bdd-demo
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install --with-deps
```

---

# Execution Steps

## Execute API Automation Tests

Generate Playwright-BDD scenarios for API features tagged with **@API** and execute the API project.

```bash
npx bddgen --tags "@API"
npx playwright test --project="API"
```

Or as a single command:

```bash
npx bddgen --tags "@API" ; npx playwright test --project="API"
```

---

## Execute UI Automation Tests

Generate Playwright-BDD scenarios for UI features tagged with **@UI** and execute the Chrome project in headed mode.

```bash
npx bddgen --tags "@UI"
npx playwright test --headed --project="Chrome"
```

Or as a single command:

```bash
npx bddgen --tags "@UI" ; npx playwright test --headed --project="Chrome"
```

---

## Execute UI Automation in Headless Mode

```bash
npx bddgen --tags "@UI"
npx playwright test --project="Chrome"
```

---

## Generate BDD Files Only

```bash
npx bddgen
```

---

## Execute All Tagged Scenarios

Generate all BDD scenarios and execute all configured Playwright projects.

```bash
npx bddgen
npx playwright test
```

---

## Execute Tests Using Playwright UI Mode

```bash
npx bddgen --tags "@UI"
npx playwright test --ui --project="Chrome"
```

---

## Execute Specific Scenario Using Tag

Example:

```bash
npx bddgen --tags "@Smoke"
npx playwright test
```

Or

```bash
npx bddgen --tags "@Regression"
npx playwright test
```

---

## Execute Complete Test Suite

Runs both UI and API automation scenarios.

```bash
npm test
```

---

## Execute UI Automation Tests

```bash
npm run test:ui
```

---

## Execute API Automation Tests

```bash
npm run test:api
```

---

## Execute Tests in Headed Mode

```bash
npm run test:headed
```

---

## Execute a Specific Feature

```bash
npx playwright test checkVehicleRegistration
```

---

## Execute Tests with Playwright UI

```bash
npx playwright test --ui
```

---

# Allure Reporting

## Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

---

## Open Generated Report

```bash
allure open allure-report
```

---

## Report Contents

The Allure report provides:

- Test execution summary
- Test pass/fail status
- Execution duration
- Historical results
- Failure screenshots
- Error details
- Execution traces

---

# GitHub Actions CI/CD

The framework includes GitHub Actions integration for automated execution.

### Workflow Activities

1. Checkout source code
2. Install project dependencies
3. Install Playwright browsers
4. Execute UI automation suite
5. Execute API automation suite
6. Generate test artifacts
7. Publish Allure results

### Workflow Triggers

```text
Push Events
Pull Requests
Manual Execution
```

---

# Reporting & Debugging

## Failure Screenshots

Screenshots are captured automatically when a test fails.

---

## Playwright Trace Files

Trace files are automatically generated for troubleshooting failures.

View trace:

```bash
npx playwright show-trace trace.zip
```

---

## Build Logs

Execution logs are available from:

- Local execution
- GitHub Actions workflow logs
- Allure Report

---

# Framework Highlights

✅ Playwright-BDD Implementation

✅ TypeScript-Based Framework

✅ UI Automation

✅ API Automation

✅ Page Object Model (POM)

✅ BDD Feature Files

✅ Allure Reporting

✅ GitHub Actions Integration

✅ Local and CI/CD Execution Support

✅ Scalable Framework Design

✅ Reusable Components

✅ Automated Reporting

✅ Failure Screenshot Capture

✅ Playwright Trace Support

✅ Maintainable Folder Structure

---

# Author

**Raghwendra Sonu**

Senior Quality Assurance Engineer

## GitHub Repository

```text
https://github.com/raghwendra-sonu/playwright-bdd-demo
```

## Repository Documentation

```text
https://github.com/raghwendra-sonu/playwright-bdd-demo/blob/main/README.md
```

---
