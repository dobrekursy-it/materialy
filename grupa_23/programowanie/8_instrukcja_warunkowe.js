let temparatura = 4;

// if (temparatura < 4) {
//     console.log("Ubierz kurtke zimową");
// } else {
//     console.log("Jest relatywnie cieplo");
// }


let padaDeszcz = false;
if (temparatura < 4 || padaDeszcz) {
    console.log("Ubierz kurtke");
} else {
    console.log("Jest relatywnie cieplo");
}


// a x^2 + bx + c
let a =1, b = 4, c = 12 

const delta = b * b - 4 * a * c;
console.log(delta);


if (delta < 0) {
    console.log("Nie ma rozwiazan");
} else {
    if (delta == 0) {
        console.log("1 rozwiaznie");
    } else {
        console.log("2 rozwiaznia");
    }
}