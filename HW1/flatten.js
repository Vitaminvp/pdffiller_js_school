/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
    if(Array.isArray(array)) {
        return array.reduce((acc, item) => {
            if(Array.isArray(item)){
                return [...acc,...item];
            }else{
                return  [...acc, item];
            }
        }, []);
    } else {
        throw new Error('Should be array!');
    }
}
//const flatten = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
console.log("flatten([1, [2, [3, [4]], 5]]);", flatten([1, [2, [3, [4]], 5]]));


flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]
console.log("flatten([1, 2, 3, 4, 5]);", flatten([1, 2, 3, 4, 5]));

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]
console.log("flatten([1, [2, 3], 4, 5])", flatten([1, [2, 3], 4, 5]));