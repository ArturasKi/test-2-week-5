// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('---------[1]--------');

const a = 20;
const b = 15;

if (a > b) {
    console.log(`Didesnis yra a=${a}.`)
} 
else if (a < b) {
    console.log(`Didesnis b=${b}.`);
} 
else if (a === b) {
    console.log(`a=${a} ir b=${b} yra lygus.`);
}



// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('---------[2]--------');

for(i = 1; i <= 10; i++) {
    console.log(i);
}



// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('---------[3]--------');

for(i = -1; i <= 10; i++) {
    i++;
    console.log(i);
}



// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('---------[4]--------');

for(i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}



// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('---------[5]--------');

let spausdintasSkaicius = 0
while (spausdintasSkaicius !== 5) {
    spausdintasSkaicius = Math.floor(Math.random() * 10) + 1;
    console.log(spausdintasSkaicius);
}


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log('---------[8]--------');

function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && (a + b) % 2 === 0) {
    return (a + b);
    }
    if (typeof a === 'number' && typeof b === 'number' && (a + b) % 2 !== 0) {
    return (`Suma yra nelygine.`);
    }
    if (typeof a === 'object' && typeof b === 'object' && (a.length + b.length) % 2 === 0) {
    return (a.length + b.length);
    }
    if (typeof a === 'object' && typeof b === 'object' && (a.length + b.length) % 2 !== 0) {
    return (`Suma yra nelygine.`);
    }
}

suma = lygineSuma(1, 9);
console.log(suma);
suma = lygineSuma(1, 6);
console.log(suma);
suma = lygineSuma([7, 7], [5, 8]);
console.log(suma);
suma = lygineSuma([7, 7, 5], [5, 8]);
console.log(suma);


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log('---------[9]--------');

function pirminisSkaicius(skaicius) {
    if (skaicius === 1) {
        return `Kintamasis yra skaicius nera pirminis.`
    } 
    else if (skaicius > 1) {
        for (i = 2; i < skaicius; i++) {
            if (skaicius % i === 0) {
                skaicius = false;
                break;
            }
        }
    } 
    if (skaicius) {
        console.log(`${skaicius} yra pirminis skaicius.`);
    } else {
        console.log(`${skaicius} nera pirminis skaicius.`);
    }
}

m = 8;
console.log(pirminisSkaicius(m));



// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
console.log('---------[10]--------');

function telefonoNumeris(numeris) {
    if (numeris.length === 10 && typeof numeris === 'object') {
        return `Telefono numeris: (${numeris[0]}${numeris[1]}${numeris[2]}) ${numeris[3]}${numeris[4]}${numeris[5]} ${numeris[6]}${numeris[7]}${numeris[8]}${numeris[9]}`;
    }
    if (numeris.length < 10 || numeris.length > 10) {
        return `Telefono numeris yra per trumpas arba per ilgas.`
    }
}

num = [3, 8, 8, 9, 8, 9, 7, 1, 5, 3];
console.log(telefonoNumeris(num));

