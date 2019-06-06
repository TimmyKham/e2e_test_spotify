module.exports = {
  'Login to spotify' : function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url("https://www.spotify.com/fr/") //Go to spotify URL
      .waitForElementVisible('body', 5000) //Wait for the page to be loaded
      .click("#header-login-link") // Click on button `se connecter`
      .waitForElementPresent("#login-username") // Validate the input username
      .waitForElementPresent("#login-password") // Validate the input login password
      .waitForElementPresent("#login-button")  // Validate the button login
      .setValue("#login-username", "")
      .setValue("#login-password", "")
      .click("#login-button")
      .assert.urlEquals('https://www.spotify.com/fr/account/overview/')
      .end();
  }
};
