module.exports = {
  'Login to vente privee' : function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/Portal/FR')
      .waitForElementVisible('body', 5000)
      .assert.title('Veepee : grandes marques à prix discount, ventes événementielles chaque jour.')
  },
  'Check login': function (browser) {
    browser
      .assert.elementPresent("#txtEmail")
      .assert.elementPresent("#txtPassword") 
      .assert.elementPresent("#btSubmit")  
      .assert.elementPresent("#signUpLink")  
    },

    'Check url sub page': function (browser) {
      browser
      .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000)
      .assert.title('Devenez membre vente-privée : chaque jour les plus grandes marques à prix discount')
    },

    'Check element sub page': function (browser) {
      browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent("#rbtCivility_1")
      .assert.elementPresent("#rbtCivility_2")
      .assert.elementPresent("#txtLastName")
      .assert.elementPresent("#txtFirstName")
      .assert.elementPresent("#txtMail")
      .assert.elementPresent("#txtPassword")
      .assert.elementPresent("#ckbInvitMailPartner")
      .assert.elementPresent("#registerBt")
    },

    'Set value sub page': function (browser) {
      browser
      .click("#rbtCivility_1")
      .setValue('#txtLastName', 'Timmy')
      .setValue('#txtFirstName', 'Khamsithideth')
      .setValue('#txtMail',"Test2019@yopmail.fr")
      .setValue('#txtPassword',"Test2019@")
      .click("#ckbInvitMailPartner")
      .assert.elementPresent("#registerBt")
      .end();
  }
};
