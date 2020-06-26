import { Before, After, Given, Then, When } from 'cucumber';
import { expect } from 'chai';


import { browser } from 'protractor';
After(async function(scenario) {
  if (scenario.result.status === 'failed') {
          const screenShot = await browser.takeScreenshot();
          this.attach(screenShot, "image/png");
  }
});
Given(/^I am on the home page$/, async () => {
  await browser.get("https://www.google.com/").then(() => 
  console.info('Redirected to homepage'));
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await browser.getTitle()).to.equal('Google');
});