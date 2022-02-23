'use strict'

/* array vazio -> const numeros = []*/

// const numeros = [20, 131, 70, 279, 320]

//PROBLEMA - Acrescentar 100 a cada elemento

/*
    ---- Solução Imperativa ----
    
    const limite = numeros.length - 1
    let numeros100 = []
    
    for (let i=0; i <= limite; i++) 
        numeros100[i] = numeros[i] + 100
*/

/* 
    -- Solução declarativa --

    1º Elemento (valor/dado)
    2º Índice
    3º Array
*/

// const acrescentar100 = (numero) => numero + 100
// // MAP - Percorre o array podendo modificar ou não e retornando um novo array do mesmo tamanho
// const numeros100 = numeros.map(acrescentar100)

// Apenas debug
// Apenas debug - console.log("numeros:", numeros)
// Apenas debug - console.log("numeros mais 100:", numeros100)

// PROBLEMA - criar um novo array com numeros menores que 100

/* Solução Imperativa
    
    const numerosMenores100 = []
    const limite = numeros.length - 1
    const desconto = 100 
    
    for (let i = 0; i <= limite; i++) 
    {
        if(numeros[i] <= desconto) 
            numerosMenores100 [i] = numeros [i]
    } 
*/


/* 
    Solução declarativa
    
    1º Elemento
    2º Indice
    3º Array
*/

// const menor100 = (numero) => numero <= 100
// // Filter - metodo utilizado para a filtragem - percorre todo o array filtrando de acordo com a condição solicitada e retorna um array do mesmo tamanho ou não
// const numerosMenores100 = numeros.filter(menor100)

// Apenas debug - console.log("Menores que 100", numerosMenores100)

// PROBLEMA - somar todos os valores (elementos)

/* Solução Imperativa
    
    let somaTotal = 0
    const limite = numeros.length - 1
    
    for (let i = 0; i <= limite; i++)
        somaTotal += numeros[i]

*/

/* 
    Solução declarativa
    
    1º Acumulador
    2º Elemento
    3º Indice
    4º Array

*/

// const soma = (numero, numero2) => numero + numero2
// // Reduce - percorre todo o array aplicando ima função (callback) e retornando um único valor
// const total = numeros.reduce(soma,0)


// Apenas debug - console.log("soma", total)

// EXERCÍCIOS

//Valores do array
const numeros = [20, 131, 70, 279, 320]

// EXERCÍCIO 1 - Valores ao quadrado

const numAoQuadrado = (numero) => numero * numero
// map - para modificar o array 
const quadradoValor = numeros.map(numAoQuadrado)

console.log("Ao Quadrado", quadradoValor)

// EXERCÍCIO 2 - Valores pares

const numPares = (numero) => numero % 2 == 0
// filter - filtrando de acordo o número ser par
const paresValor = numeros.filter(numPares)

console.log("Pares", paresValor)

// EXERCÍCIO 3 - Média

// Tamanho do array
const limite = numeros.length

const numMedia = (total, numero) => total + numero 
//reduce - percorrendo o array somando o numero ao acumulador
const mediaValor = numeros.reduce(numMedia,0) / limite

console.log("Média", mediaValor)

// EXERCÍCIO 4 - Soma ímpares

//array apenas de números impares com o filter
const numImpares = (numero) => numero % 2 == 1
const imparesValor = numeros.filter(numImpares)

const numImparSoma = (total,imparesValor) => total + imparesValor
//reduce - percorrendo o array somando o numero ao acumulador
//pegando o array de apenas ímpares
const somaImpar = imparesValor.reduce(numImparSoma, 0)

console.log("Soma Ímpares", somaImpar)

// EXERCÍCIO 5 - Valor total com 20% de desconto

const valorNum20 = (numero) => numero * (20/100)
//map - array com a porcentagem em todos os itens
const porcTotal = numeros.map(valorNum20)

const numSomaPorc = (total, numeroPorc) => total + numeroPorc
//reduce - percorrendo o array somando o numero ao acumulador (total)
//pegando o array da porcentagem
const somaTotalPorc = porcTotal.reduce(numSomaPorc, 0)

console.log("Porcentagem", porcTotal)

