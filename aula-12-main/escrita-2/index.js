
/**
 * 
 * Escreva as fun��es explicadas abaixo:
 * 
 * a) Escreva uma fun��o que receba 2 n�meros como par�metros, e, dentro da fun��o, fa�a a soma das duas entradas e retorne o resultado. Invoque a fun��o e imprima no console o resultado.
 * 
 * b) Fa�a uma fun��o que recebe 2 n�meros e retorne um booleano que informa se o primeiro n�mero � maior ou igual ao segundo.
 * 
 * c) Escreva uma fun��o que receba um n�mero e devolva um booleano indicando se ele � par ou n�o.
 * 
 * d) Fa�a uma fun��o que recebe uma mensagem (string) como par�metro e imprima o tamanho dessa mensagem, juntamente com uma vers�o dela em letras mai�sculas.
 * 
**/

/** A */

function numeros (numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

let soma = numeros(5,10)

console.log(numeros(5, 10))
console.log(numeros(5, 15))

/** B */

function numeros (numero1, numero2){
    const resultado = numero1 >= numero2
    return resultado 
}

let resultado = numeros (10,5)
console.log(resultado)

/** C */

function numbersPar (numero){
    const numberoBoo = number % 2 == 0
    return numberoBoo

}
let numberBoo = mumberPar (10)
console.log(mumerBoo)


/** D */

function versaoMaiuscula(texto){
    const versaoMaiuscula = texto.toUpperCase()
    return versaoMaiuscula
}
console.log(versaoMaiuscula)