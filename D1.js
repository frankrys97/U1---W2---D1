/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Javascript, nome "dialettale" di Ecmascript, è un linguaggio di programmazione moderno che nasce
// con l'intenzione di rendere le pagine web dinamiche, ma che poi nel corso del tempo ha subito diverse
// evoluzione che ne hanno permesso l'uso in modo più "generico", trovando spazio di applicazione anche
// in applicazioni mobili, desktop, videogiochi, realtà virtuale etc etc

// I principali elementi di questo linguaggio di programmazione sono le cosiddette variabili, ovvero dei "contenitori",
// a livello di hardware corrisponde a delle celle nella RAM, all'interno dei quali è possibile inserire un valore, un dato.
// I modi per definire una variabile sono principalmente tre: LET - CONST - VAR (in disuso).
// I tipi di dato invece che questi "contenitori" possono ricevere al loro interno sono 5:

// 1 - Numbers, ovvero proprio i numeri (interi, decimali, negativi), con i quali è possibile anche eseguire operazioni aritmetiche;

let num = 10;
let num1 = 10.6;
let num2 = -34;

// 2 - Stringhe, ovvero dei valori che corrispondono ad un testo, identificato dall'uso delle virgolette;

let name = "Susan";
let car = "Ford";

// 3 - Boolean, ovvero un tipo di dato che accetta un valore true (vero) ed un valore false (false);

let isRaining = true;
let isEasy = false;

// 4 - Undefined, ovvero un tipo di dato che indica qualcosa di non definito

let iDontKnow;

console.log(iDontKnow);

// 5 - Null, ovvero un dato esplicitamente vuoto

let dog = null;

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "Francesco";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12;
let number2 = 20;
let sumNum = number1 + number2;

console.log(sumNum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// myName = "Cristiano"
// console.log(myName);

// L'impossibilità del fatto di assegnare un nuovo valore alla variabile myName è data
// dal fatto che il nostro terminale se chiediamo di effettuare un console.log della variabile in questione
// riporta un errore relativo al fatto che la variabile myName era stata precedentemente dichiarata con const,
// quindi una variabile immutabile, essendo appunto una costante!

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sub = 4 - x; // N.B. Avremmo anche potuto assegnare ad una variabile y il valore 4 ed creare la variabile sub
// che avrebbe avuto come valore la sottrazione tra y ed x

console.log(sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);

// In console verrà stampato il messaggio true, proprio perchè con l'operatore di comparazione !== noi stiamo verificando
// che la disuguaglianza sia vera, ovvero che i due valori siano effettivamente diversi.

name1.toLowerCase === name2.toLowerCase
  ? console.log("name1 è uguale a name2")
  : console.log("name1 è diverso da name2");

// Con questo operatore ternario stiamo dicendo al programma che se l'uguaglianza tra la prima variabile, a cui attribuiamo un
// lower case, e la seconda variabile, a cui attribuiamo un lowercase, risulta essere true (come ci chiedeva la traccia), allora
// può stampare in console il messaggio "name1 è uguale a name2" altrimenti stamperà il messaggio "name1 è diverso da name2".
