//
let kursanciImiona = ['Seweryn', 'Marek'];
let kursanciWiek = [37, 28];

kursanciImiona.push('Marta');
kursanciWiek.push(25);

console.log(kursanciImiona, kursanciWiek);

const kursant = {
    imie: "Seweryn",
    wiek: 37,
};

console.log(kursant);

kursant["wiek"] = 38;

console.log(kursant["wiek"], kursant);
console.log(kursant.wiek);

kursant.wiek = 40;
kursant.imie = 'Sergiusz';
console.log(kursant);


kursanci = [
    {
        imie: "Seweryn",
        wiek: 37,
    },
    {
        imie: "Marek",
        wiek: 28,
    },
];

console.log(kursanci);

console.log(kursanci[0].imie);

// kursant = {
//     imie: "Szymon",
//     wiek: 37,
// };