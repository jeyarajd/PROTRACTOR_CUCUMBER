import { Before, After, Given, Then, When } from 'cucumber';
import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import {ExcelReader} from '../Helper/ExcelReader';
const { Readable } = require("stream")
import { stream } from 'exceljs';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const excelRead : ExcelReader = new ExcelReader();
const search: SearchPageObject = new SearchPageObject();

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

Given(/^I am on search page$/, async () => {
  expect(await browser.getTitle()).to.equal('Google');

});

When(/^I type "(.*?)"$/,async function(maxWaitTime,text){

    var data = text.rowsHash();
    await excelRead.exl(data.searchkeyword).then(async function(objct){
      console.log(objct);
        await objct.forEach( async  function (value) {   
        await search.searchTextBox.sendKeys(value).then (async function(){
        await search.searchTextBox.clear();
       });
   });
  });
});
