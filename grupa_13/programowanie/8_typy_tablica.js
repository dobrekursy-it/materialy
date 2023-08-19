let mojaUlubionaPiosenka = 'Fear of the Light';
let mojaUlubionaPiosenka2 = 'Fear of the Dark';
let mojaUlubionaPiosenka3 = 'Fear of the Work';

// ciezko sie tym zarzadza

let mojeUlubionePiosenki = ['Fear of the Light', 'Fear of the Dark', 'Fear of the Work'];

console.log(mojeUlubionePiosenki);

console.log(mojeUlubionePiosenki.length);

// chce pierwszy element
console.log(mojeUlubionePiosenki[1]);

// chce pierwszy element -- pierwszy = 0
console.log(mojeUlubionePiosenki[0]);

mojeUlubionePiosenki[0] = 'Wesole chomiki';

console.log(mojeUlubionePiosenki);

mojeUlubionePiosenki.push('Rumbling');

console.log(mojeUlubionePiosenki, mojeUlubionePiosenki.length);

// mojeZnienawidzonePiosenki.push("Wake up!");

// blad, to jest stala mojeZnienawidzonePiosenki = [];

// console.log(mojeZnienawidzonePiosenki);

console.log(mojeUlubionePiosenki.indexOf('Fear of the Dark'));
