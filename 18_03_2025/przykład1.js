//Pusta tablica 
const pustaTablica = [];

//Tablica z elemnatam
const owoce = ['Jabłka','Banan','Pomarancze'];

//Pusta tablica
const pustaTablica2 = new Array();

//Tablica z elemanetami
const liczby = new Array(1, 2, 3, 4, 5);

const dniTygodnia1 = ['Ponedziałek', 'wtorek', 'Środa', 'Czwartek','Piatek'];

console.log(dniTygodnia[0]); //Poniedziałek
console.log(dniTygodnia[3]); //czwartek

const dniTygodnia = ['Ponedziałek', 'wtorek', 'Środa', 'Czwartek','Piatek'];
console.log(dniTygodnia.length); //5

const owoce1 =  ['Jabłka','Banan','Pomarancze'];
owoce[1] = 'Gruszka';

console.log(owoce); //['Jabłka','Gruszka','Pomarancze'];

const liczby1 = [1, 2, 3];
liczby.push(4);
console.log(liczby); //[1, 2, 3, 4];

const liczby2 = [1, 2, 3, 4];
const ostatni = liczby.pop();
console.log(ostatni); //4
console.log(liczby); // [1, 2, 3]

const liczby3 = [1, 2, 3, 4];
const pierwszy = liczby.shift();
console.log(pierwszy); //1
console.log(liczby); // [2, 3, 4]

const liczby4 = [2, 3, 4];
liczby.unshift(1);
console.log(liczby); //[1, 2, 3, 4]

const liczby5 = [1, 2, 3, 4, 5];
const podTablica = liczby.slice(1, 3);
console.log(podTablica); //[2, 3] (zwraca elementy o indeksach 1, 2)
console.log(liczby); //[1, 2, 3, 4, 5]

const liczby6 = [1, 2, 3, 4, 5];
//usuniecie2 lementow od ineksu 1 i wstawienie w ich miejsce liczby 10 i 11
liczby.splice(1, 2, 10, 11);
console.log(liczby); //[1, 10, 11, 4, 5]

const tab1 = [1, 2];

const tab2 = [3, 4];

const nowaTablica = tab1.concat(tab2);
console.log(nowaTablica); //[1, 2, 3, 4]

const liczby7 = [1, 2, 3]
liczby.forEach((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`)
});
// Element: 1, Indeks: 0

// Element: 2, Indeks: 1

// Element: 3, Indeks: 2

const liczby8 =[1, 2, 3]; 
const podwojne = liczby.map((element) => element * 2);
console.log(podwojone); //[2, 4, 6]
console.log(liczby); //[1, 2, 3]

const liczby9 = [1, 2, 3, 4, 5];
const parzyste = liczby.filter((element) => element % 2 === 0);
console.log(parzyste); //[2, 4]
