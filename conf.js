exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['project_test.js'],
  // capabilities: {
  //   browserName: 'chrome',
  //   chromeOptions: {
  //     args: ["--headless", "--window-size=800x600"]
  //   }
  // },
  onPrepare: function() {
    //for non-angular pages
    browser.ignoreSynchronization = true
  }

};
