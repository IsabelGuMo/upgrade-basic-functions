//Iteración #1: Buscar el máximo.//
// Completa la función que tomando dos números como argumento devuelva el más alto.//

function highestNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) { 
        return numberOne;
   } else  {
       return numberTwo;
   }
   
}

console.log(highestNumber(5, 20));


//Iteracion #2: Buscar la palabra mas larga//
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función://

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengersList) {
    let longestWord = avengersList[0];

    for (let index = 1; index < avengersList.length; index++) {
        if (avengersList[index].length > longestWord.length) {
            longestWord = avengersList[index];
        }
    }

    return longestWord;
}
 
console.log(findLongestWord(avengers));

