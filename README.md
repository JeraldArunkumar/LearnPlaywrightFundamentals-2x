# LearnPlaywrightFundamentals-2x

Playwright concepts and fundamentals practice repository.

## Project Overview

This repository contains a simple Playwright test project for learning browser automation basics.

- Uses Playwright with TypeScript
- Includes a basic example test suite
- Generates HTML test reports and test artifacts

## Folder Structure

- `tests/` - Contains Playwright test files
- `test-results/` - Stores execution output and traces
- `playwright-report/` - Contains the generated HTML report
- `node_modules/` - Installed dependencies

## Prerequisites

- Node.js
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Run Tests

Run the Playwright tests:

```bash
npx playwright test
```

Show the HTML report:

```bash
npx playwright show-report
```

## Configuration

The project configuration is defined in `playwright.config.ts` and uses the Chromium browser by default.
