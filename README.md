# LearnPlaywrightFundamentals-2x

This repository is a hands-on Playwright learning project focused on browser automation fundamentals, test authoring, and reporting.

## Project Overview

The project includes:

- Playwright with TypeScript
- Example and practice test files under the tests folder
- HTML report generation and test artifacts
- Configurations for running browser-based automation locally

## Folder Structure

- tests/ - Contains Playwright test specs for practice and examples
- test-results/ - Stores traces, screenshots, and execution artifacts
- playwright-report/ - Contains the generated HTML report
- node_modules/ - Installed project dependencies

## Prerequisites

- Node.js (version 18 or later is recommended)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/02_First_test/237_BCP_Test_option.spec.ts
```

Show the HTML report:

```bash
npx playwright show-report
```

## Configuration

The project configuration is defined in playwright.config.ts and uses Chromium by default.

## Notes

This repository is intended for learning and experimentation with Playwright concepts such as selectors, assertions, fixtures, and test reporting.
