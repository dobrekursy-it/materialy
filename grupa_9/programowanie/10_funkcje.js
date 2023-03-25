
const maksimum = (tablica) => {
  let max  = tablica[0];
  for (let index = 1; index <  tablica.length; index += 1) {
    if (tablica[index] > max) {
      max = tablica[index];
    }
  }
  return max;
}


const generujTablice = (n) => {
  const tablica = [];
  while (n > 0) {
    tablica.push(Math.random());
    n -= 1;
  }
  return tablica;
}

const tablica = [1,2,3, -10, -24, 3,4];

maksimum(tablica);
maksimum([5,6,-2]);


maksimum([5,6,-2]);

//
const t = generujTablice(1000);
const maxT = maksimum(t);
console.log(t, maxT);
