function obrocText(slowo)
{
    let slowo1 = new String("");
    for(let i = 1; i < slowo.lenght + 1; i++)
    {
        slowo1 += slowo[slowo.lenght - i]
    }
    document.write(slowo);
}
odwrocText(prompt("Podaj slowo"));