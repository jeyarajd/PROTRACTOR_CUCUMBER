const path = require('path');
var filePath="";
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [
    {
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      chromeOptions: {
        useAutomationExtension: false,
      },
    }],

  specs: ['./features/app.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./Steps/apps.steps.ts'],
    format: 'json:report/result.json'
  },

  onPrepare() {
 

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    require: ['./common/chaiAssertions.ts', './common/hooks.ts'],
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    SELENIUM_PROMISE_MANAGER: false

  },
  onComplete: () => {var reporter = require('cucumber-html-reporter');
  const testFolder = './report/';
  const fs = require('fs');
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      filePath=file;  
      var options = {
        theme: 'bootstrap',
        jsonFile: './report/'+file,
        output: 'cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
    
      screenshotsDirectory: 'screenshots123',
      takeScreenShotsOnlyForFailedSpecs: true,
       //screenshotsSubfolder: 'images',
      storeScreenshots: true,
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        },
    
      };
      reporter.generate(options);
      fs.unlinkSync('./report/'+file)
    });
  
  });

 
  console.log('Test Completed')

  },
}