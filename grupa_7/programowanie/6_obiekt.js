const kursanci = ['A', 'B', 'C'];
const kursanciCzyWlaczonyMikforon = [true, false, false];
const kursanciIkona = ['pies', 'kot', 'zaba'];


console.log(kursanci[0], kursanciCzyWlaczonyMikforon[0], kursanciIkona[0]);


const kursant = {
  nazwa: 'A',
  czyWlaczonyMikrofon: true,
  ikona: 'pies'
};

console.log(kursant);

console.log(kursant['nazwa']);
console.log(kursant.nazwa);

kursant.czyWlaczonyMikrofon = false;
kursant['czyWlaczonyMikrofon'] = false;


console.log(kursant);


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
    czyWlaczonyMikrofon: false,
    ikona: 'zaba'
  }
]


console.log(listaKursantow);

listaKursantow[1].czyWlaczonyMikrofon = true;
console.log(listaKursantow);


listaKursantow.push({
  nazwa: 'D',
  czyWlaczonyMikrofon: false,
  ikona: 'kapibara',
});

console.log(listaKursantow);
