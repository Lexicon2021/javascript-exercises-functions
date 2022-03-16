// 4.1 Vad skrivs ut av följande koder?
//1b
/*var a = foo(3);
console.log(a);
function foo(i) {
	return i * i;
}*/


// 1c
/*console.log( foo(3, 5) );
function foo(x, y) {
	return x * y;
}*/

// 1d
/*let x = 2;
let y = 3

// Bryt ut variabler för att göra svåra rader lättare att förstå
// let a = foo(foo(x) + foo(y));

let fx = foo(x)  // foo(2) == 5*2 == 10
// console.log('fx är: ' + fx)
let fy = foo(y)  // foo(3) == 5*3 == 15

let a = foo(fx + fy);  // foo(25) == 5*25 == 125
console.log(a);
function foo(i) {
	return 5 * i;
}
*/

// 1e
/*let a = 5;  // a är en global variabel
function foo(a) {  // a är en parameter - lokal för funktionen
	a++;  // ändrar den lokala variabeln, a++ är samma som a = a + 1 eller a += 1
	console.log('Inuti foo, lokala a är: ', a)
	// nu försvinner lokala a
}
a += 2;  // globala variabeln
foo(a)
console.log(a);
*/


// 1f
/*var foo = function(i) {
	return 2*i*i;  // 2*3*3 == 18
};
var goo = function(x, y)
{
	// x är foo
	// y är 3
	return x(y);  // samma som: foo(3)
};
var a = goo(foo, 3);
console.log(a);
*/



// 2a Skriv en funktion med namnet add som lägger ihop två tal och returnerar resultatet
function add(bamse, skalman) {
	let summa = bamse + skalman
	return summa
}
// console.log( add(1, 2) )


// let vs. var?
// Använd alltid let eller const - det moderna sättet


// 2b Skriv en funktion med namnet multi som multiplicerar tre tal och returnerar resultatet. Vad händer om man anropar funktionen med färre än tre parametrar?
function multi(a, b, c) {
	return a * b * c
}
// Kompaktare version:
// const multi = (a, b, c) => a * b * c


// 2c Skriv en funktion som tar fyra tal som parametrar. Den ska multiplicera de tre första och lägga ihop resultatet med den fjärde. Använd funktionerna add och multi.
function multiAdd(m, n, o, p) {
	let product = multi(m, n, o)
	let sum = add(product, p)
	return sum
	// Kortare:
	//return add( multi(m, n, o), p )
}
// Namnförslag för funktionen:
// multiAdd  - använder multi och add
// combo     - kombinerar funktioner
// tvåC      - koppling till övningsuppgift

// console.log(multiAdd(2, 3, 4, 5))  // borde bli 29

// , kommatecken
// ; semikolon
// : kolon
// . punkt


// 5 Skriv ett program som skriver ut talen 1 till 16 med hjälp av en loop.
// for( let i=1; i<17; i++ ) {  // i<=16
// 	console.log(i)
// }

// 6 Skriv ett program som har talet 65536 i en variabel. Så länge som variabeln är större än 2 ska programmet loopa, skriva ut talet och sedan dela variabeln med 2.
// let num = 65536
/*while( num > 2 ) {
	console.log(num)
	num = num / 2   // num /= 2
}*/
/*for( ; num > 2; num /= 2 ) {
	console.log(num)
}*/

// 6b Skriv en loop som räknar ut summan av talen 1 till och med 10.
// Magic numbers - värden som upprepas i koden
// 6c Paketera din loop i en funktion: function summa(min, max).
function summa(min, max) {
	let summanHittills = 0
	for( let i=min; i<=max; i++ ) {
		summanHittills += i
	}
	return summanHittills
}

/*
let from = -100, to = 100
let sum = summa(from, to)
console.log(`Summan av talen ${from} till ${to} är: ${sum}.`)
*/

// 6d Skriv en loop som skriver ut talen 20 till 15, i den ordningen.
// for( let i=20; i>=15; i-- ) {
// 	console.log(i)
// }

// 6e Skriv en loop som skriver ut de jämna talen från 2 till 20
for( let i=2; i<=20; i+=2 ) {
	console.log(i)
}
// for( let i=2; i<=20; i++ ) {
// 	if( i % 2 === 0 ) {
// 		console.log(i)
// 	}
// }
