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
	return add( multi(m, n, o), p )
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
