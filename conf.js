const path = require('path');
const junit = require('cucumber-junit');
var filePath = "";
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

  specs: ['./features/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {

    tags: ['@regression or @smoke'],
    require: ['./Steps/*.ts', './common/*.ts', './common/xml.js'],
    format: ['json:report/result.json']
  },
  baseUrl: "https://www.google.com",
  onPrepare() {


    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    SELENIUM_PROMISE_MANAGER: false

  },
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    const testFolder = './report/';
    const fs = require('fs');
    console.log("Entered");
    console.log(testFolder);

    let dirCont = fs.readdirSync(testFolder);
    console.log("dirCont " + dirCont);

    dirCont.forEach(file => {
      filePath = file;
      var options = {
        theme: 'bootstrap',
        jsonFile: './report/' + file,
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

    });
    const file = fs.readFileSync(testFolder + filePath, 'utf-8');
    var xml = junit(file.toString(), { indent: '    ', strict: false });
    fs.writeFileSync('cucumber_report.xml', xml);
    fs.unlinkSync('./report/' + filePath)
    console.log('Test Completed')
  },
}