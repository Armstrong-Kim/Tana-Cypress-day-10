# Day 10: Cypress + Cucumber project

## Repository Summary
This repository contains automated tests for the login, shopping cart, and checkout functionalities of the website https://www.saucedemo.com/. The automated tests are implemented using Cypress and Cucumber.

## Requirements

Before installing and running the project, make sure you have the following components installed on your machine:

- Node.js (recommended version)
- npm (recommended version)

## Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/yourproject.git
    ```

2. Navigate to the project directory:

    ```bash
    cd yourproject
    ```
3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Launch Steps

To run the tests, use the following commands:

- Run tests in headless mode:

    ```bash
    npm run test:headless
    ```
- Run tests in interactive mode:

    ```bash
    npm run cypress:open
	    OR
    ./node_modules/.bin/cypress open

    ```

## Report Creation Steps 

1. Run tests with the Mochawesome reporter:

    ```bash
    npm run test:report
    ```
 This command will execute the tests and generate a JSON report.

2. Once the tests are completed, run the following command to merge and generate the HTML report:

    ```bash
    npm run merge:report
    ```
3. After the merging process is complete, the HTML report will be available in the `reports` directory.   
