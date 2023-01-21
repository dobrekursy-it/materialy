console.log("Start za 5...");
console.log("Start za 4...");
console.log("Start za 3...");
console.log("Start za 2...");
console.log("Start za 1...");
console.log("Start!");

let startZa = -1;
while (startZa > 0) {
  console.log("Start za " + startZa + "...");
  startZa -= 1;
}
console.log("Start!");



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

listaKursantow.push({
  nazwa: 'X',
  czyWlaczonyMikrofon: true,
  ikona: 'kapibara',
})

let  i = 0;
while (i < listaKursantow.length) {
  if (listaKursantow[i].czyWlaczonyMikrofon) {
    console.log(listaKursantow[i].nazwa + " mozesz mowic");
  } else {
    console.log(listaKursantow[i].nazwa + " nie mozesz mowic");
  }
  i += 1;
}
