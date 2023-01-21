const kursant = {
  nazwa: 'A',
  czyWlaczonyMikrofon: true,
  ikona: 'pies'
};



// to jest instrukcja warunkowa
if (kursant.czyWlaczonyMikrofon) {
  console.log("Możesz mówić!");
} else {
  console.log("Nie możesz mówić!");
}


// realizacja znalezienia maksymlanej liczbowy
const a = 4, b = 4, c = 4;

if (a > b) {
  if (a > c) {
    console.log('najwieksza wartosc to ' + a);
  } else {
    console.log('najwieksza wartosc to ' + c);
  }
} else {
  if (b > c) {
    console.log('najwieksza wartosc to ' + b);
  } else {
    console.log('najwieksza wartosc to ' + c);
  }
}

let wyciszWsysztko = true;

// to jest instrukcja warunkowa
if (kursant.czyWlaczonyMikrofon && !wyciszWsysztko) {
  console.log("Możesz mówić!");
} else {
  console.log("Nie możesz mówić!");
}
