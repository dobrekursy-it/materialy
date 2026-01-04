let kursant1 = 'Seweryn';
let kursant2 = 'Kamil';

// ...

console.log(kursant1, kursant2);


let kursanci = 'Seweryn,Kamil';

console.log(kursanci);


kursanci = ['Seweryn', 'Kamil', 'Marta'];

console.log(kursanci);

console.log(kursanci[0]);
console.log(kursanci[1]);

console.log(kursanci.length)

console.log(kursanci[2]);

kursanci.push('Jerzy');

console.log(kursanci, kursanci.length);

kursanci[1] = 'Kamila';
console.log(kursanci, kursanci.length);

console.log(kursanci.indexOf("Marta"));