import { Builder } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

export async function createDriver() {
    const options = new chrome.Options();
    options.addArguments("--headless=new");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");

    return await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
}