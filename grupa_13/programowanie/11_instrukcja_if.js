const ZA_DLUGA_PIOSENKA = 300;

let dlugoscZmienna = 240;

if (false) /* <- warunek */ {
  // kod wykonany gdy warunek spełniony
}

if (dlugoscZmienna >= ZA_DLUGA_PIOSENKA) {
  console.log("Piosenka jest za dluga, jej dlugosc to " + dlugoscZmienna);
}

if (!(dlugoscZmienna >= ZA_DLUGA_PIOSENKA)) {
  console.log("Piosenka jest idealnej dlugosci");
}

if (dlugoscZmienna >= ZA_DLUGA_PIOSENKA) {
  console.log("Piosenka jest za dluga, jej dlugosc to " + dlugoscZmienna);
} else {
  console.log("Piosenka jest idealnej dlugosci");
}

let a = 5, b = 2, c = 3;

if (a > b) {
  // gorna glaz
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  // dolna galz
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
