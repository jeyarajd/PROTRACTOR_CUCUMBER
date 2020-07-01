import { Before, After, Given, Then, When } from 'cucumber';

Given(/^Print first smoke scenario$/,  () => {
    console.log("First Smoke scenario");
  });

  Given('/^Print Second smoke scenario$', function (callback) {
    console.log("Second Smoke scenario");
  });

Given(/^Print Third smoke scenario$/,  () => {
    console.log("Third Smoke scenario");
  });

Given(/^Print first Regression scenario$/,  () => {
    console.log("First regression scenario");
  });

Given(/^Print second Regression scenario$/,  () => {
    console.log("Second regression scenario");
  });

Given(/^Print Third Regression scenario$/,  () => {
    console.log("Third regression scenario");
  });

  