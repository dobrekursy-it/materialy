let kursant = "X";
let kursant2 = "Y";


let kursanci = "X,Y";

console.log(kursanci);

kursanci = ['X', 'Y', 'Z'];

console.log(kursanci);

console.log(kursanci.length);

kursanci.push('A');

console.log(kursanci, kursanci.length);

// w JS tablice numerowane sa od 0,
console.log(kursanci[1]);


kursanci[1] = 'B';

console.log(kursanci);

const tablica = [1, 2, 'Test', true, undefined];
console.log(tablica);
tablica.push(null);

// tablica jest stała -- wartosci wewnetrzen moga sie zmieniac
console.log(tablica);

console.log(kursanci.indexOf('B'));

console.log(kursanci.indexOf('S'));
