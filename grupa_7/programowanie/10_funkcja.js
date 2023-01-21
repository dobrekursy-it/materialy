

const listaKursantow = [
  {
    nazwa: 'A',
    czyWlaczonyMikrofon: true,
    ikona: 'pies'
  },
  {
    nazwa: 'B',
    czyWlaczonyMikrofon: false,
    ikona: 'kot'
  },
  {
    nazwa: 'C',
    czyWlaczonyMikrofon: true,
    ikona: 'zaba'
  }
]

const listaKursantow2 = [
  {
    nazwa: 'I',
    czyWlaczonyMikrofon: true,
    ikona: 'pikachu'
  },
  {
    nazwa: 'II',
    czyWlaczonyMikrofon: false,
    ikona: 'bulbasaur'
  },
  {
    nazwa: 'III',
    czyWlaczonyMikrofon: true,
    ikona: 'scyther'
  }
]

const ktoMozeMowic = (kursanci) => {
  let  i = 0;
  while (i < kursanci.length) {
    if (kursanci[i].czyWlaczonyMikrofon) {
      console.log(kursanci[i].nazwa + " mozesz mowic");
    }
    i += 1;
  }
}

ktoMozeMowic(listaKursantow);
ktoMozeMowic(listaKursantow2);



const mojeLiczby = [1,2,3,4,5];

const znajdzNajwiekszaLiczbe = (tablicaLiczb) => {
  let  i = 1;
  let najwiekszaLiczba = tablicaLiczb[0];
  while (i < tablicaLiczb.length) {
    if (tablicaLiczb[i] > najwiekszaLiczba) {
      najwiekszaLiczba = tablicaLiczb[i];
    }
    i += 1;
  }
  return najwiekszaLiczba;
}


let a = znajdzNajwiekszaLiczbe(mojeLiczby);
console.log("Najwieksz liczba w tablicy to " + a);
console.log(znajdzNajwiekszaLiczbe([-3, -2, -10]));

let dlugoscTablicy = 1e8;
const tablicaZLiczbami = [];

while (dlugoscTablicy--) {
  tablicaZLiczbami.push(Math.round(100*Math.random()));
}

console.log(tablicaZLiczbami, znajdzNajwiekszaLiczbe(tablicaZLiczbami));
