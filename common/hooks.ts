import { browser } from 'protractor';
const { Before,BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { config } from "../conf";
import {setDefaultTimeout} from 'cucumber';

BeforeAll({ timeout: 100 * 1000 }, () => {
    setDefaultTimeout(100 * 1000);
  });


Before({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
