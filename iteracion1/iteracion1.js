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

//Iteración #3: Calcular la suma
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(sumNumbers) {
    let sum = sumNumbers[0];

    for (let index = 1; index < sumNumbers.length; index++) {
        sum += sumNumbers[index];
    }

    return (sum);
}

console.log(sumAll(numbers));

//Iteración #4: Calcular el promedio
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const number = [12, 21, 38, 5, 45, 37, 6];

function average(averNumber)  {
    let sum = averNumber[0];

    for (let index = 1; index < averNumber.length; index++) {
        sum += averNumber[index];
    }

    return sum / averNumber.length;
}

console.log(average(number));

//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array 
//y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(wordNumList) {
    let sum = 0;
    
    for (let index = 0; index < wordNumList.length; index++) {
        if (typeof wordNumList[index] === 'string') {
            sum += wordNumList[index].length;
        } else if (typeof wordNumList[index] === 'number') {
            sum += wordNumList[index];
        }
    }
    
    return sum;
}

console.log(averageWord(mixedElements));

//Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.



const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(words) {
    let noDuplicates = [];

    for (let index = 0; index < words.length; index++) {
        if (!noDuplicates.includes(words[index])) {
            noDuplicates.push(words[index]);
        } else {
            words.pop();
        }   
    }
    return noDuplicates;
}

let resultado = removeDuplicates(duplicates);
console.log(resultado);

//Iteración #7: Buscador de nombres
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// en caso que existan nos devuelve un true y la posición de dicho elemento y 
//por la contra un false. 

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function FinderName(stringList, aString) {
    for (let index = 0; index < stringList.length; index++) {
        if (stringList[index] === aString) {
            return [true, index];
        } 
    }
    return false;
  }

  console.log(FinderName(nameFinder, 'Logan'));

  //Iteration #8: Contador de repeticiones
  //Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(stringList) {
    let contador = {};

    for (let index = 0; index < stringList.length; index++) {
        const word = stringList[index];
        if (word in contador) {
            contador[word]++;
        } else {
            contador[word] = 1;
        }
    }

    return contador;
  }

  console.log(repeatCounter(counterWords));