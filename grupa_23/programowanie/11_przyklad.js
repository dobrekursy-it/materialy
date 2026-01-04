const liczby = [1,2,3,4, 3, 2, 1];


let najwiekszyElement = 0;
for (let i = 0; i < liczby.length; i++) {
    if (liczby[i] > najwiekszyElement) {
        najwiekszyElement = liczby[i];
    }
}


// zrobmy funkcje
const maxT = (tablica) => {
    let najwiekszyElement = 0;
    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i] > najwiekszyElement) {
            najwiekszyElement = tablica[i];
        }
    }
    return najwiekszyElement;
}


console.log(maxT(liczby));

console.log(maxT([-1, -2]));


// zrobmy funkcje
const maxT2 = (tablica) => {
    let najwiekszyElement = tablica[0];
    for (let i = 1; i < tablica.length; i++) {
        if (tablica[i] > najwiekszyElement) {
            najwiekszyElement = tablica[i];
        }
    }
    return najwiekszyElement;
}

console.log(maxT2([-1, -2]));