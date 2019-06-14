/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
const uniq = array => Array.from(new Set(array));

function uniq1(array) {
    return array.reduce((result, currentElement) => {
        if (result.indexOf(currentElement) < 0) {
            return result.concat([currentElement]);
        }
        return result;
    }, []);
}

function uniq2(array) {
    return array.reduce((result, currentElement) => {
        if (result.indexOf(currentElement) < 0) {
            result.push(currentElement);
        }
        return result;
    }, []);
}

function uniq3(array) {
    return array.filter( (value, index, arr) => arr.indexOf(value) === index );
}



uniq([2, 1, 2]);
// => [2, 1]

console.log("uniq([2, 1, 2])", uniq([2, 1, 2]));
console.log("uniq1([2, 1, 2])", uniq1([2, 1, 2]));
console.log("uniq2([2, 1, 2])", uniq2([2, 1, 2]));
console.log("uniq3([2, 1, 2])", uniq3([2, 1, 2]));
