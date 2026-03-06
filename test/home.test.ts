import { Builder, By, until } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

async function createDriver() {
  const options = new chrome.Options();
  options.addArguments("--headless=new", "--no-sandbox");
  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}

(async () => {
  const driver = await createDriver();

  try {
    await driver.get("http://localhost:3000/");

    await driver.wait(until.elementLocated(By.css(".some-input")), 10000);

    // -------- TEST 1: Open dialog --------
    await driver.findElement(By.css(".dialog-button")).click();
    await driver.wait(until.elementLocated(By.css(".dialog-allow")), 5000);
    await driver.findElement(By.css(".dialog-cancel")).click();
    console.log("✅ Dialog opened successfully");

    // -------- TEST 2: Fill form --------
    await driver.findElement(By.css(".name-input")).sendKeys("John Doe");
    await driver.findElement(By.css(".role-trigger")).click();
    await driver.findElement(By.css(".role-option")).sendKeys("Developer");
    await driver.findElement(By.css(".framework-input")).sendKeys("Next.js");
    await driver.findElement(By.css(".framework-option")).click();
    await driver.findElement(By.css(".submit-btn")).click();
    console.log("✅ Form filled successfully");

  } catch (err) {
    console.error("❌ Test failed", err);
  } finally {
    await driver.quit();
  }
})();