nightwatch_config = {
  "src_folders": [
    "test/"     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  "output_folder": "report/", // reports (test outcome) output by Nightwatch
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'khamsithidethtim1',
        'browserstack.key': '5Sbzn5zmWVtsxWZRaZNB',
        'browser': 'chrome',
        'name': 'Bstack-[Nightwatch]-spotify'
      }
    }
  }
};
// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}
module.exports = nightwatch_config;
