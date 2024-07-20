// 1 tabla multiplpicar
let numero = parseInt(prompt("Ingrese un número: "))
console.log("La tabla de multiplicar de tu número ingresado es: ")
for (let i = 1; i <= 10; i++){
  console.log(numero + "*" + i + " = " + numero*i)
}


// 2 números acumulados
// let numerosAlmacenados = []
// let numero

// do {
//   numero = parseFloat(prompt("*** Ingrese 0 para terminar el programa *** \nFavor Introduzca un Número: "))
//   if(numero !== 0){
//     numerosAlmacenados.push(numero)
//   }
// } while(numero !== 0)

// console.log("Los números ingresados fueron: ", numerosAlmacenados)


// 3 juego adivinar
// let numeroSecreto = 50
// let numero = 0
// let intentos = 0
// let salir = false

// while (numero !== numeroSecreto && salir !== true) {
//   let entrada = prompt("Presiona 'q' para salir \nAdivina el número secreto (entre 1 y 100): ")
//   numero = parseInt(entrada)

//   if (entrada.toLowerCase() === "q"){
//     salir = true
//     alert("Saliste del juego! Hasta la próxima!")
//     break
//   }

//   intentos = intentos + 1

//   if (numero > numeroSecreto){
//     alert("Numero ingresado es mayor al número secreto, prueba de nuevo")
//   } else if (numero < numeroSecreto){
//     alert("Número ingresado es menor al número secreto, prueba de nuevo")
//   } else {
//     alert(`Felicitaciones! Descubriste el número secreto! \nY lo hiciste en ${intentos} intentos`)
//   }
// }


// 4  número primo
// let numero = parseInt(prompt("Ingrese un número para saber si es primo o no: "))

// function esPrimo(numero) {
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// if (esPrimo(numero)){
//   alert(`El número ${numero} es primo`)
// }else{
//   alert(`El número ${numero} no es primo`)
// }


// 5 divisores
// let numero = parseInt(prompt("Ingrese un número: "))

// function mostrarDivisores(numero) {
//   let divisoresArray = []
//   for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//       divisoresArray.push(i)
//     }
//   }
//   return divisoresArray
// }

// let divisores = mostrarDivisores(numero)
// alert(`Los divisores de ${numero} son: ${divisores.join(', ')}`)


// 6 array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(i = 0; i < array.length; i++){
//   console.log(array[i])
// }


// 7 array * 2
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(i = 0; i < array.length; i++){
//   console.log(array[i]*2)
// }


// 8 objetos familia
// let familia = [
//   {
//     nombre: "Juan",
//     apellido: "Anuel",
//     edad: 40,
//     estatura: 178
//   },
//   {
//     nombre: "Pedro",
//     apellido: "Reyes",
//     edad: 34,
//     estatura: 176
//   },
//   {
//     nombre: "Lucas",
//     apellido: "Gutierrez",
//     edad: 20,
//     estatura: 170
//   },
//   {
//     nombre: "Elizabeth",
//     apellido: "Downtown",
//     edad: 30,
//     estatura: 168
//   },
//   {
//     nombre: "Emma",
//     apellido: "Tomsomp",
//     edad: 32,
//     estatura: 172
//   },
// ]

// for (let i = 0; i < familia.length; i++) {
//   const persona = familia[i]
//   console.log(`Hola, soy ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} y mido ${persona.estatura}.`)
// }


// 9 array impares
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let impares = []
// for (let i = 0; i < array.length; i++){
//   if (i % 2 !== 0){
//     impares.push(i)
//   }
// }

// console.log(impares)


// 10 suma pares e impares
// let numero
// let pares = 0
// let impares = 0

// do {
//   numero = parseInt(prompt('(Ingresa 0 para terminar el programa) \nIngresa un número: '))
//   if (numero !== 0) {
//     if (numero % 2 === 0) {
//       pares += numero
//     } else {
//       impares += numero
//     }
//   }
// } while (numero !== 0)

// console.log(`La suma de los números pares ingresados es: ${pares}`)
// console.log(`La suma de los números impares ingresados es: ${impares}`)


// 11 array número más grande
// let numeros = [3, 6, 101, 6, 23, 11, 100, 8, 193, 17]
// let maximo = numeros[0]

// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > maximo) {
//     maximo = numeros[i]
//   }
// }

// console.log(`El número más grande es: ${maximo}`)


// 12 array número mas chico
// const numeros = [3, 6, 101, 6, 23, 11, 100, 8, 193, 17]
// let minimo = numeros[0]

// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] < minimo) {
//     minimo = numeros[i]
//   }
// }

// console.log(`El número más chico es: ${minimo}`)


// 13 piedra papel o tijera
// let jugador1 = prompt('Ingrese el nombre del primer jugador: ')
// let jugador2 = prompt('Ingrese el nombre del segundo jugador: ')

// let jugar = true

// while (jugar) {
//   let turnoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase()
//   let turnoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase()

//   if (turnoJugador1 === turnoJugador2) {
//     alert('Hubo un empate. Continuemos jugando.')
//   } else {
//     if ((turnoJugador1 === 'piedra' && turnoJugador2 === 'tijeras') ||
//         (turnoJugador1 === 'papel' && turnoJugador2 === 'piedra') ||
//         (turnoJugador1 === 'tijeras' && turnoJugador2 === 'papel')) {
//       alert(`${jugador1} gana el juego! Felicidades!`)
//     } else {
//       alert(`${jugador2} gana el juego! Felicidades!`)
//     }
//     jugar = false
//   }
// }


// 14 tirangulo 5 asteriscos
// for (let i = 1; i <= 5; i++){
//   let triangulo = ""

//   for(let j = 1; j <= i; j++){
//     triangulo = triangulo + "*"
//   }
//   console.log(triangulo)
// }


// 15 triangulo 5 asteriscos invertido

// for (let i = 5; i >= 1; i--) {
//   let triangulo = '';
//   for (let j = 1; j <= i; j++) {
//     triangulo = triangulo + '*'
//   }
//   console.log(triangulo)
// }

// for (let i = 0; i < 5; i++){
//   let triangulo = ""
//   for(let j = 1; j < 5 - i; j++){
//     triangulo = triangulo + " "
//   }
//   for(let j = 0; j <= i; j++){
//     triangulo = triangulo + "*"
//   }
//   console.log(triangulo)
// }


// 16 aray ordenado
// let array = [5, 44, 75, 17, 28, 59, 100, 37, 86, 91]

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j]
//       array[j] = array[j + 1]
//       array[j + 1] = temp
//     }
//   }
// }

// console.log("Array ordenado: ", array)
