exports.Actionwords = {
  stepToLaunchTheApplicationInBrowser: function() {
    browser.get('https://sport:sport@dev.tvac.bt.com/sportApp/');
    browser.manage().window().maximize();
    browser.sleep(1000);
    console.log('Sample text to make sure it waited');
    browser.executeScript("document.body.style.zoom='67%'");

  },
  iShouldSeeTheAppLogo: function() {
    var loginButton = element(by.css('#login_button_id'));
    //browser.wait(EC.visibilityOf(loginButton), 15000);
    expect(loginButton.isPresent()).toEqual(true);

  }
};
