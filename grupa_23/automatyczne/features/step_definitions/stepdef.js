const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {Builder, By} = require('selenium-webdriver');
setDefaultTimeout(600 * 1000);

let driver = new Builder().forBrowser('chrome').build();

const dajKafelek = (rzad, kolumna) => {
    const indeks = ["lewy", "srodkowy", "prawy"].indexOf(rzad) + ["gorny", "srodkowy", "dolny"].indexOf(kolumna) * 3;
    return driver.findElement(By.id('s' + indeks))
}


Given('Gracz uruchomil gre', function () {
    driver.get('https://jagusiak.github.io/xo/');
});  

When('Gracz kliknal kafelek {string} {string}', async function (rzad, kolumna) {
    await driver.manage().setTimeouts({ implicit: 1000 });
    dajKafelek(rzad, kolumna).click();
  });

Then('Kafelek {string} {string} jest {string}', async function (rzad, kolumna, oczekiwanyZnak) {
    const znak = await dajKafelek(rzad, kolumna).getAttribute('data-sign');
    assert.strictEqual(oczekiwanyZnak, znak);
});

Then('Wygywa {string}', async function (znak) {
    const jestWyswietlone = await driver.findElement(By.id(znak + '-win')).isDisplayed()
    assert.strictEqual(true, jestWyswietlone);
  });

  Then('Remis', async function () {
    const jestWyswietlone = await driver.findElement(By.id('d-win')).isDisplayed()
    assert.strictEqual(true, jestWyswietlone);
  });