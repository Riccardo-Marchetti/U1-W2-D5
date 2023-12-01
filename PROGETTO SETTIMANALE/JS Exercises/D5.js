/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let primo = pets.shift(0);
pets.push(primo);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "12332";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
for (let i = 0; i < cars.length; i++) {
  cars[i].years = "183";
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const trims = cars[i].trims[0];
  justTrims.push(trims);
}
console.log("justTrims", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (numericArray[i] <= 32) {
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeth = "abcdefghijklmnopqrstuvwxyz";
const alphabethArray = alfabeth.split("");
const positionarray = [];
switch (charactersArray) {
  case "a":
    positionarray.push(1);
    break;
  case "b":
    positionarray.push(2);
    break;
  case "c":
    positionarray.push(3);
    break;
  case "d":
    positionarray.push(4);
    break;
  case "e":
    positionarray.push(5);
    break;
  case "f":
    positionarray.push(6);
    break;
  case "g":
    positionarray.push(7);
    break;
  case "h":
    positionarray.push(8);
    break;
  case "i":
    positionarray.push(9);
    break;
  case "j":
    positionarray.push(10);
    break;
  case "k":
    positionarray.push(11);
    break;
  case "l":
    positionarray.push(12);
    break;
  case "m":
    positionarray.push(13);
    break;
  case "n":
    positionarray.push(14);
    break;
  case "o":
    positionarray.push(15);
    break;
  case "p":
    positionarray.push(16);
    break;
  case "q":
    positionarray.push(17);
    break;
  case "r":
    positionarray.push(18);
    break;
  case "s":
    positionarray.push(19);
    break;
  case "t":
    positionarray.push(20);
    break;
  case "u":
    positionarray.push(21);
    break;
  case "v":
    positionarray.push(22);
    break;
  case "w":
    positionarray.push(23);
    break;
  case "x":
    positionarray.push(24);
    break;
  case "y":
    positionarray.push(25);
    break;
  case "z":
    positionarray.push(26);
    break;
  default:
}
console.log(alphabethArray);
