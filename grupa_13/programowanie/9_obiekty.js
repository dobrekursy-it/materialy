const piosenki = ['Latajace chomiki', 'Gryzace weże'];
const autorzy = ['Ludwik Zwierzak', 'Szymon Opiekun'];
const dlugosci = [ 240, 115 ];


const piosenka = {
  tytul: 'Latajace chimixi',
  autor: 'Ludwik Zwierzak',
  dlugosc: 240
};

console.log(piosenka);

console.log(piosenka["tytul"]);
console.log(piosenka.tytul);

piosenka["tytul"] = "Latajace chomiki";
console.log(piosenka);

piosenka.tytul = "Latajace chomiki 2";
console.log(piosenka);

const listaPiosenek = [
  {
    tytul: 'Latajace chimixi',
    autor: 'Ludwik Zwierzak',
    dlugosc: 240
  },
  {
    tytul: 'Gryzace weże',
    autor: 'Szymon Opiekun',
    dlugosc: 115
  }
];

console.log(listaPiosenek);

console.log(listaPiosenek[0].tytul);

listaPiosenek[0].tytul = 'Latajace chomiki';
console.log(listaPiosenek);


console.log(typeof(piosenka));
console.log(typeof([]));
