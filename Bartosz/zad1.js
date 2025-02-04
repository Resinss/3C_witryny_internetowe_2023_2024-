function przywitaj() {
    document.write("Cześć, witaj w JavaScript!");
}
przywitaj();
function dodaj(a, b) {
    return a + b;
}
let suma = dodaj(3, 7);
document.write(suma); // 10
const mnoz = (x,y) => x * y;
document.write(mnoz(4, 5)); //10
function pokazArgumenty(a, b) {
    document.write(a, b);
}
pokazArgumenty(1, 2, 3, 4); //Wydrukuje 1 2 (pozostałe są ignorowane)
function powitaj(imie) {
    document.write("Cześć, " + imie);
}
powitaj(); //Cześć, underfined
function powitaj(imie = "Gościu") {
    document.write("Cześć, " + imie);
}
powitaj(); //CZeść, Gościu