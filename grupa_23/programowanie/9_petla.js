let startRakiety = 3;

while (startRakiety > 0) {
    // to sie wykona wielktornie
    console.log("Start za " + startRakiety);
    startRakiety--;
}

console.log("Start");

startRakiety = 2

while (startRakiety) {
    // to sie wykona wielktornie
    console.log("Start za " + startRakiety);
    startRakiety--;
}
console.log("Start");


let kursanci = [
    {
        imie: "Seweryn",
        wiek: 37,
    },
    {
        imie: "Marek",
        wiek: 28,
    },
    {
        imie: "Marta",
        wiek: 25,
    },
];

let ind = 0;
while (ind < kursanci.length) {
    console.log(kursanci[ind].imie + "[" + kursanci[ind].wiek + "]");
    ind++;
}

for (let i = 0; i < kursanci.length; i++) {
    console.log(kursanci[i].imie + "[" + kursanci[i].wiek + "]");
}


console.log("======");
for (let i = 0; i < kursanci.length; i++) {
    if (kursanci[i].wiek >= 30) {
        console.log(kursanci[i].imie + "[" + kursanci[i].wiek + "]");
    }
}