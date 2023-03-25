const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {Builder, By} = require('selenium-webdriver');
setDefaultTimeout(600 * 1000);
let driver = new Builder().forBrowser('chrome').build();


const pobierzKafelek = (nrKafelka) => {
  return driver.findElement(By.id('s' + (nrKafelka-1)))
}

Given('uzytkownik wlaczyl gre', function () {
  driver.get('https://jagusiak.github.io/xo/');
});


When('uzytkownik kliknal w kafalek {string}', function (nrKafelka) {
  pobierzKafelek(nrKafelka).click();
});

Then('kafelek {string} jest {string}', async function(nrKafelka, oczekiwanyZnak) {
  const znak = await pobierzKafelek(nrKafelka).getAttribute('data-sign');
  if (oczekiwanyZnak == 'kolkiem') {
    assert.strictEqual('o', znak);
  } else {
    assert.strictEqual('x', znak);
  }
});


Then('{string} wygrywa', async function(oczekiwanyZnak) {
  let locator;
  if (oczekiwanyZnak == "kolko") {
    locator = By.id('o-win');
  } else {
    locator = By.id('x-win');
  }
  const czyWidoczny = await driver.findElement(locator).isDisplayed();
  assert.strictEqual(true, czyWidoczny);
});


Then('remis', async function() {
  const czyWidoczny = await driver.findElement(By.id('d-win')).isDisplayed();
  assert.strictEqual(true, czyWidoczny);
});
