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
