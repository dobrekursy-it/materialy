function przywitaj(imie) {
  console.log("Hej " + imie);
}



przywitaj("Marcin");
przywitaj("Seweryn");
przywitaj("Kamila");

const losoweLiczby = (ileLiczb, maksymlnaLiczba) => {
  const tab = [];
  for (let i = 0; i < ileLiczb; i++) {
    tab.push(-1*Math.round(maksymlnaLiczba*Math.random()));
  }
  return tab;
}

let mojaTablica = losoweLiczby(23, 1000);

let najwieksza = mojaTablica[0];
for (let i = 1; i < mojaTablica.length; i++) {
  if (mojaTablica[i] > najwieksza) {
    najwieksza = mojaTablica[i];
  }
}
console.log(mojaTablica, najwieksza);
