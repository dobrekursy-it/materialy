// operatora przypisnia
let zmienna = 'wartosc';

// opartor +

console.log(1+2);
console.log(1.5 + 1.5);
console.log(0.1+0.2);

console.log("S" + "J");

console.log("S" + 1);
console.log("1" + 1);
console.log(1 + "1");

console.log(true + true)
console.log(false + false)

// operator -
console.log(2 -1, 1.5 - 0.6, true - false);
console.log("Seweryn" - "S");

// opertor *

console.log(2*4, 1.5* 4, true * false);
console.log("x" * 10);

console.log("Ba" + ("x" * 10) + 'a');

// operator dzielenia
console.log(2/4, 10/2, "10" / 2);

// operator modulo
console.log(5 % 2, 4 % 2);

// = <-

zmienna = 10;
// chemy dodac do zmiennej
zmienna = zmienna + 2;
console.log(zmienna);

zmienna += 2;
console.log(zmienna);

zmienna -= 2;
console.log(zmienna);

zmienna /= 6;
console.log(zmienna);

zmienna *= 5;
console.log(zmienna);

zmienna++;
console.log(zmienna);
zmienna--;
console.log(zmienna);

// operator logcizne
console.log(zmienna > 0);

console.log(zmienna > 10);
console.log(zmienna >= 10);
console.log(zmienna < 10);
console.log(zmienna <= 10);


console.log(zmienna == 10);
console.log(zmienna == "10");
console.log(zmienna === "10");

console.log(zmienna != 10);
console.log(zmienna != "10");
console.log(zmienna !== "10");


// operatory logiczne / boolskie
// operator AND czy i
// &&


console.log(zmienna > 0 && zmienna <= 10)


// ||
console.log(zmienna < 0 || zmienna >= 10)

// !
console.log(!(zmienna < 0 || zmienna >= 10))


console.log(!false)