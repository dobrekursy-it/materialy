let uczestnicy = ['Seweryn', 'Szymon'];


let uczestnikImie = 'Seweryn';
let uczestnikWiek = 34;
let uczestnikCzyWlaczonyMikrofon = true;

// let uczestnikImie2 = 'Seweryn';
// let uczestnikWiek2 = 34;
// let uczestnikCzyWlaczonyMikrofon2 = true;

let uczestnicyImiona = ['Seweryn', 'Szymon'];
let uczestnicyWiek = [32, 28];
let uczestnicyCzyWlaczonyMikrofon = [true, false];

// obiekt
const uczestnik = {
  imie: "seweryn",
  wiek: 34,
  czyWlaczonyMikrofon: true,
};

console.log(uczestnik);

console.log(uczestnik.imie);
console.log(uczestnik['wiek']);

let pole = 'wiek';
console.log(uczestnik[pole]);


// uczestnik.imie = 'Seweryn';
// console.log(uczestnik);

uczestnik["imie"] = 'Seweryn';
console.log(uczestnik);

uczestnicy = [
  {
    imie: "Seweryn",
    wiek: 34,
    czyWlaczonyMikrofon: true,
  },
  {
    imie: "Szymoan",
    wiek: 28,
    czyWlaczonyMikrofon: false,
  }
];

console.log(uczestnicy);

uczestnicy[1].imie = 'Szymon';

console.log(uczestnicy);
