/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */

const chunk = (array, size) =>
  array.length <= size
    ? [array]
    : [array.slice(0, size), ...chunk(array.slice(size), size)];

function chunk1(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

function chunk2(array, size) {
    let result = [];
    let arrayCopy = [...array];
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result;
}

function chunk3(array, size) {
    let result = [];
    for (value of array){
        let lastArray = result[result.length - 1 ];
        if(!lastArray || lastArray.length === size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

chunk(["a", "b", "c", "d"], 2);
// => [['a', 'b'], ['c', 'd']]

console.log("chunk", chunk(["a", "b", "c", "d"], 2));
console.log("chunk1", chunk1(["a", "b", "c", "d"], 2));
console.log("chunk2", chunk2(["a", "b", "c", "d"], 2));
console.log("chunk3", chunk3(["a", "b", "c", "d"], 2));

chunk(["a", "b", "c", "d"], 3);
// => [['a', 'b', 'c'], ['d']]

console.log("chunk", chunk(["a", "b", "c", "d"], 3));
console.log("chunk1", chunk1(["a", "b", "c", "d"], 3));
console.log("chunk2", chunk2(["a", "b", "c", "d"], 3));
console.log("chunk3", chunk3(["a", "b", "c", "d"], 3));
