
let zostaloSekund = 1e4;


while (zostaloSekund) {
  console.log("Start za " + zostaloSekund + " ...");
  zostaloSekund -= 1;
}
console.log("START");


const uczestnicy = [
  {
    imie: "Seweryn",
    wiek: 34,
    czyWlaczonyMikrofon: true,
  },
  {
    imie: "Szymon",
    wiek: 28,
    czyWlaczonyMikrofon: true,
  },
{
  imie: "Kamila",
  wiek: 28,
  czyWlaczonyMikrofon: false,
},
  {
    imie: "Justyna",
    wiek: 28,
    czyWlaczonyMikrofon: true,
  },
];


let index = 0;
while (index <  uczestnicy.length) {
  console.log(uczestnicy[index].imie);
  index += 1;
}


for (let index = 0; index <  uczestnicy.length; index += 1) {
  if (uczestnicy[index].czyWlaczonyMikrofon) {
    console.log(uczestnicy[index].imie + " ma wlaczony mikrofon!");
  }
}
