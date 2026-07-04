# Playwright BDD Automation Framework

## Overview

This repository demonstrates an end-to-end automation framework built using:

- Playwright
- Playwright-BDD
- TypeScript
- Page Object Model (POM)
- Allure Reporting
- GitHub Actions CI/CD

The framework covers both UI and API automation and is designed for local and CI/CD execution.

---

## Automated Scenarios

### UI Automation – Service NSW

**Scenario: Check Vehicle Registration**

1. Navigate to https://www.service.nsw.gov.au
2. Click **Check Rego**
3. Click **Check Online**
4. Enter registration plate number **ABC123**
5. Accept Terms and Conditions
6. Click **Check Registration**
7. Validate the returned error message

---

### API Automation – Open Brewery DB

**Endpoint**

```text
https://api.openbrewerydb.org/v1/breweries/random
```

**Scenario: Random Brewery Validation**

1. Retrieve 2 random brewery records
2. Validate response status code
3. Traverse the response payload
4. Print:
   - Brewery Name
   - Address 1

---

## Framework Architecture

```text
Feature Files
      ↓
Step Definitions
      ↓
Page Objects / API Classes
      ↓
Playwright Engine
      ↓
Application Under Test
```

---

## Project Structure

```text
tests
├── ui
│   ├── features
│   ├── pages
│   └── steps
│
└── api
    ├── features
    ├── pages
    ├── models
    └── steps

.github/workflows
playwright.config.ts
bdd.config.ts
package.json
```

---

## Setup

Clone the repository:

```bash
git clone https://github.com/raghwendra-sonu/playwright-bdd-demo.git
cd playwright-bdd-demo
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install --with-deps
```

---

## Execution

### API Automation

```bash
npx bddgen --tags "@API" ; npx playwright test --project="API"
```

### UI Automation

```bash
npx bddgen --tags "@UI" ; npx playwright test --headed --project="Chrome"
```

---

## Allure Reporting

Generate report:

```bash
allure generate allure-results --clean -o allure-report
```

Open report:

```bash
allure open allure-report
```

---

## CI/CD

GitHub Actions workflow is configured to:

- Install dependencies
- Install Playwright browsers
- Execute UI tests
- Execute API tests
- Publish Allure artifacts

---

## Framework Highlights

✅ Playwright-BDD

✅ TypeScript

✅ API & UI Automation

✅ Page Object Model (POM)

✅ Allure Reporting

✅ GitHub Actions CI/CD

✅ Local & CI Execution Support

✅ Scalable Framework Design

---

## Author

**Raghwendra Sonu**

GitHub Repository:

https://github.com/raghwendra-sonu/playwright-bdd-demo
