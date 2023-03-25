/*


 _
|_
|_
|_
|_
|_

wysokosc szafki,
4 - 5
gubosc polki


*/

const wysokoscSzafki = 98;
const gruboscPolki = 1.8;
const liczbaPolek = 5;
// (wysokoscSzafki - gruboscPolki) / liczbaPolek

let miejsceInstalcji = 0;

let poziom = 1;
console.log("Instlacja na " + miejsceInstalcji);

while (poziom <= liczbaPolek) {
  miejsceInstalcji += (wysokoscSzafki - gruboscPolki) / liczbaPolek;
  console.log("Instlacja na " + miejsceInstalcji);
  poziom +=1;
}
