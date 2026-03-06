"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome = __importStar(require("selenium-webdriver/chrome"));
async function createDriver() {
    const options = new chrome.Options();
    options.addArguments("--headless=new", "--no-sandbox");
    return await new selenium_webdriver_1.Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
}
(async () => {
    const driver = await createDriver();
    try {
        await driver.get("http://localhost:3000/");
        await driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css(".some-input")), 10000);
        // -------- TEST 1: Open dialog --------
        await driver.findElement(selenium_webdriver_1.By.css(".dialog-button")).click();
        await driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css(".dialog-allow")), 5000);
        await driver.findElement(selenium_webdriver_1.By.css(".dialog-cancel")).click();
        console.log("✅ Dialog opened successfully");
        // -------- TEST 2: Fill form --------
        await driver.findElement(selenium_webdriver_1.By.css(".name-input")).sendKeys("John Doe");
        await driver.findElement(selenium_webdriver_1.By.css(".role-trigger")).click();
        await driver.findElement(selenium_webdriver_1.By.css(".role-option")).sendKeys("Developer");
        await driver.findElement(selenium_webdriver_1.By.css(".framework-input")).sendKeys("Next.js");
        await driver.findElement(selenium_webdriver_1.By.css(".framework-option")).click();
        await driver.findElement(selenium_webdriver_1.By.css(".submit-btn")).click();
        console.log("✅ Form filled successfully");
    }
    catch (err) {
        console.error("❌ Test failed", err);
    }
    finally {
        await driver.quit();
    }
})();
