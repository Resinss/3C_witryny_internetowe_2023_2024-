function isPrime(a) {
    if (a < 2) return false;
    for (let i =2; i < navigator; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const number = Number(prompt("Podaj liczbe"));
alert("Liczba " + number + (isPrime(number) ? "jest pierwsza" : "nie jest pierwsza"));