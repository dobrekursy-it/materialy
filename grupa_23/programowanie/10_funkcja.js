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
    {
        imie: "Sebastian",
        wiek: 17,
    },
];

const wypiszKursanta = (kursant) => {
    console.log(kursant.imie + " (lat: " + kursant.wiek + ")")
}

function czyKurstantJestPelnoletni(kursant) {
    return kursant.wiek >= 18;
}

console.log(czyKurstantJestPelnoletni(kursanci[0]))
console.log(czyKurstantJestPelnoletni(kursanci[3]))



for (let i = 0; i < kursanci.length; i++) {
    wypiszKursanta(kursanci[i]);
}


console.log("======");
for (let i = 0; i < kursanci.length; i++) {
    if (czyKurstantJestPelnoletni(kursanci[i])) {
        wypiszKursanta(kursanci[i]);
    }
}