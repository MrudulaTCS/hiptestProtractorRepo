describe('Demo Project Classic Agile', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Scenario1 (uid:27ad7b34-920e-4656-a756-f37dc8687c6f)', function () {
    // Given step to launch the application in browser
    this.actionwords.stepToLaunchTheApplicationInBrowser();
    // Then I should see the app logo
    this.actionwords.iShouldSeeTheAppLogo();
  });
});
