let ileZajmieWczytaniePiosneki = 2;

if (ileZajmieWczytaniePiosneki > 0) {
  console.log("Zostało " + ileZajmieWczytaniePiosneki);
}


ileZajmieWczytaniePiosneki -= 1;

if (ileZajmieWczytaniePiosneki > 0) {
  console.log("Zostało " + ileZajmieWczytaniePiosneki);
}

ileZajmieWczytaniePiosneki -= 1;

if (ileZajmieWczytaniePiosneki > 0) {
  console.log("Zostało " + ileZajmieWczytaniePiosneki);
}

ileZajmieWczytaniePiosneki -= 1;

console.log("Wczytano");



while (false) /* warunek */ {
  // to co ma sie wykonac jesli warunek jest spelniony
  console.log('X');
}


ileZajmieWczytaniePiosneki = 10;

while (ileZajmieWczytaniePiosneki > 0) {
  console.log("Zostało " + ileZajmieWczytaniePiosneki);
  ileZajmieWczytaniePiosneki -= 1;
}
console.log("Wczytano");



const listaPiosenek = [
  {
    tytul: 'Latajace chimioki',
    autor: 'Ludwik Zwierzak',
    dlugosc: 240
  },
  {
    tytul: 'Gryzace weże',
    autor: 'Szymon Opiekun',
    dlugosc: 115
  }
];

listaPiosenek.push({
  tytul: "Wielkie programistyczne zamieszanie",
  autor: "Seweryn Jagusiak",
  dlugosc: 230
})

let indeks = 0;
let dlugoscPiosnek = 0;

while (indeks < listaPiosenek.length) {
  console.log(indeks + ":" + listaPiosenek[indeks].tytul);
  dlugoscPiosnek += listaPiosenek[indeks].dlugosc;
  indeks++;
}

console.log("Dlugosc wszystkich piosenek to: " + dlugoscPiosnek);

dlugoscPiosnek = 0;
for (let i = 0; i < listaPiosenek.length; i++) {
  dlugoscPiosnek += listaPiosenek[i].dlugosc;
}
console.log("Dlugosc wszystkich piosenek to: " + dlugoscPiosnek);
