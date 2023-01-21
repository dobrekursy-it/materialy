const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {Builder, By} = require('selenium-webdriver');

setDefaultTimeout(600 * 1000);
let driver = new Builder().forBrowser('chrome').build();

const znajdzPole = (wiersz, kolumna) => {
  /*
0 | 1 | 2
3 | 4 | 5
6 | 7 | 8
         ^ (3,3)
  */
  const numer = (kolumna - 1)*3 + (wiersz - 1);
  return driver.findElement(By.id('s' + numer));
}

Given('użytkownik uruchomile gre', function () {
  driver.get('https://jagusiak.github.io/xo/')
});

When('użytkownik klika w pole {string} {string}', function (wiersz, kolumna) {
  znajdzPole(wiersz, kolumna).click();
});

Then('pole {string} {string} jest {string}', async function (wiersz, kolumna, oczekiwanyZnak) {
  const znak = await znajdzPole(wiersz, kolumna).getAttribute('data-sign');
  if (oczekiwanyZnak == "kolkiem"){
    assert.strictEqual('o', znak);
  } else {
    assert.strictEqual('x', znak);
  }

});


Then('wygrywa {string}', async function (znak) {
  let selector;
  if (znak == "kolko") {
    selector = By.id('o-win');
  } else {
    selector = By.id('x-win');
  }
  const czyWidoczne = await driver.findElement(selector).isDisplayed();
  assert.strictEqual(true, czyWidoczne);
});
