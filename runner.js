// runner.js

const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000); // Set default timeout for steps

class CustomWorld {
    constructor() {
        this.browser = null;
        this.page = null;
    }
}

setWorldConstructor(CustomWorld);

// Run Cucumber
const { run } = require('@cucumber/cucumber');
run();