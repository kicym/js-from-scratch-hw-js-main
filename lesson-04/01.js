/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true
        }
    }
    return false
}

console.log(includesElement([1, 2, 3], 2))


//
// let scores1 = [23, 56, 87, 98, 80, 37, 63];
// let scores2 = [24, 76, 30, 98, 45, 37, 63];
//
//
// function calculatorScores (anyArray) {
//     let sum = 0;
//     for (let i = 0; i < anyArray.length; i++) {
//
//         sum = sum + scores1[i];
//     }
//     return Math.round (sum / anyArray.length);
// }
//
// let averageScores = calculatorScores(scores1);
//
// console.log("averageScores: ", averageScores);
//
// function classifyScores(scoresArray) {
//     let result = [];
//     for(let i = 0; i < scoresArray.length; i++) {
//         let score = scoresArray[i];
//         let grade
//
//         if (score >= 80) {
//             grade =5;
//         } else if (score >= 50) {
//             grade =4;
//         } else if (score >= 30) {
//             grade =3;
//         } else {
//             grade =2;
//         }
//         result.push(grade)
//     }
//     return result;
// }
//
// let superScores = classifyScores(scores1);
// console.log(superScores);
//
// // let arr = [1, 2, 3, 4, 5, 6];
//
// function reverseArray(someArray) {
//     let newArray = []
//     for(let i = someArray.length-1; i >= 0; i--) {
//     newArray.push(someArray[i])
//     }
//     return newArray;
// }
//
// let res = reverseArray(arr);
// console.log("reverseArray: ", res)
//
//  let arr = [1, 2, 3, 4, 5, 6];
// function removeElement (someArray, someElement) {
//     let newArray = [];
//     for (let i = 0; i < someArray.length; i++) {
//         let elementFromArray = someArray[i];
//         if (elementFromArray !== someElement) {
//             newArray.push(someArray[i])
//         }
//     }
//     return newArray
// }
