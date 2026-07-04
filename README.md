# Playwright BDD Automation Framework

## Overview

This repository demonstrates an end-to-end automation framework built using:

- Playwright
- Playwright-BDD
- TypeScript
- Page Object Model (POM)
- Allure Reporting
- GitHub Actions CI/CD
- API & UI Automation

The framework showcases both UI and API automation scenarios using a clean, scalable design.

---

## Automated Scenarios

### UI Automation

**Application:** Service NSW

**Scenario: Check Vehicle Registration**

1. Navigate to https://www.service.nsw.gov.au
2. Click **Check Rego**
3. Click **Check Online**
4. Enter registration plate number **ABC123**
5. Accept terms and conditions
6. Click **Check Registration**
7. Validate the returned error message

---

### API Automation

**Application:** Open Brewery DB

**Endpoint:**

https://api.openbrewerydb.org/v1/breweries/random

**Scenario: Random Brewery Validation**

1. Retrieve 2 random brewery records
2. Validate API response status code
3. Traverse the JSON response
4. Print:
   - Brewery Name
   - Address 1

---

## Framework Structure

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
```
