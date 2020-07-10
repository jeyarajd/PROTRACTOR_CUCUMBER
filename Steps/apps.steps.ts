import { Before, After, Given, Then, When } from 'cucumber';
import { browser, protractor } from "protractor";
import {ExcelReader} from '../Helper/ExcelReader';

const { Readable } = require("stream")
import { stream } from 'exceljs';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const excelRead : ExcelReader = new ExcelReader();


Given(/^I am on "(.*?)" page$/, async (brand : string) => {
 console.log(brand);
});

When(/^Enter "(.*?)"$/,async function(firstName : string){
console.log(firstName); // return 
});
