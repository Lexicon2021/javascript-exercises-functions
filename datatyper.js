/*
console.log('Hello world')  // apostrof (enkelfnutt)
console.log("Hello world")  // citattecken (dubbelfnutt)
console.log(`Hello world`)  // grav accent, backtick
*/
const exempel = 15  // global, gäller i hela filen
console.log(exempel)

// definiera funktionen sayName
function sayName(name) {
	// name är lokal, finns bara i funktionen
	// console.log('Hej ' + name + '!')
	console.log(`Hej    ${name}!`)
}

sayName('David')
sayName('Maryam')
sayName('Oskar')
sayName('Anders', 'Jimmy')
sayName('Pär')  // JavaScript-strängar använder UTF-8 och klarar svenska tecken

// let noValue = null
// console.log(noValue)


let isLoggedIn = false
console.log('isLoggedIn har värdet', isLoggedIn)

if( isLoggedIn ) {
	console.log('Du är inloggad')
}
else {
	console.log('Du är inte inloggad')
}

let price = 5600
if( price > 100 )
	console.log('Expensive!')
else {
	console.log('Affordable!')
}

// Jämförelser
// ||    OR, eller
// &&    AND, och

function canRide(hasTicket, age) {
	// Flumeride kräver att man är 10 år gammal
	if( hasTicket && age >= 10 ) {
		console.log('Wiiiiiiiiiiiiiiiiii....')
	} else {
		console.log('Tyvärr, du får inte åka!')
	}
}
// x > y     strikt större än
// x >= y    större än eller lika med
// x < y, x <= y
// x == y    x lika med y
// x === y   x lika med y och samma datatyp
// x != y    x inte lika med y

// Automatisk typkonvertering
// Så fort det är två olika datatyper i samma uttryck, omvandlas de till samma datatyp.
// number + number --> number
// string + string --> string
// number + string --> string + string --> string
// *** string vinner över number för + ***

// number - string --> number - number --> number
// *** number vinner över string för - ***


// Exempel
// '5' + "0" / '2'
// Division och multiplikation har högre prioritet
// '5' + ("0" / '2')
// '5' + (0 / 2)
// '5' + 0
// '5' + '0'
// '50'
