const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {Builder, By} = require('selenium-webdriver');
setDefaultTimeout(600 * 1000);
let driver = new Builder().forBrowser('chrome').build();

const pobierzKafelek = (rzad, kolumna) => {
  const id = 3*["gorny", "srodkowy", "dolny"].indexOf(rzad)+["lewy", "srodkowy", "prawy"].indexOf(kolumna);
  return driver.findElement(By.id('s' + id));
}

Given('uzytkownik uruchomil gre', function() {
  driver.get('https://jagusiak.github.io/xo/');
});

When('uzytkownik kliknal w {string} {string} kafalek', function (rzad, kolumna) {
  pobierzKafelek(rzad, kolumna).click();
});

Then('kaflek {string} {string} jest {string}', async function (rzad, kolumna, znak) {
  const pobrnayZnak = await pobierzKafelek(rzad, kolumna).getAttribute('data-sign');
  if (znak == "kolkiem") {
    assert.strictEqual('o', pobrnayZnak);
  } else {
    assert.strictEqual('x', pobrnayZnak);
  }
});

Then('{string} wygrywa', async function (znak) {
  let oczekiwanyZnak = 'x';
  if (znak == 'kolko') {
    oczekiwanyZnak = 'o';
  }
  const widac = await driver.findElement(By.id(oczekiwanyZnak + '-win')).isDisplayed();
  assert.strictEqual(true, widac);
});
