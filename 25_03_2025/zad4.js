const oceny = [6, 5, 4, 3, 2, 1];
    const ocenki = oceny.map(ocena => {
        switch (ocena) {
            case 6: return "celująca";
            case 5: return "bardzo dobra";
            case 4: return "dobra";
            case 3: return "dostateczna";
            case 2: return "dpuszczjąca";
            case 1: return "niedostateczna";
            defult: return "nieznana ocena";
        }
    });

    console.log("Oceny numeryczne:", oceny);
    console.log("Oceny tekstowe", ocenki);