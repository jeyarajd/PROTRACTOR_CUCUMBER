import { browser } from 'protractor';
import {  After } from 'cucumber';

module.exports = function(){ After(function (scenario) {
    if (scenario.result.status === "failed") {
      const World = this;
  
      return browser.takeScreenshot().then(function (buffer) {
        return World.attach(buffer, 'image/png');
      });
    }});

}