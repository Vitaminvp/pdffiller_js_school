/**
 * Реализовать такие методы работы над массивами
 */
/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
    if(Array.isArray(arr) && Array.isArray(itemsToExclude)){
        return arr.filter(item =>  {
            for (let i = 0; i < itemsToExclude.length; i++) {
                if (item === itemsToExclude[i])  return false;
            }
            return true;
        });
    }
    throw new Error('Accepts arrays only.');

}
const arr = [2, 1, 5];
const itemsToExclude = [2, 3];

//difference([2, 1, 5], [2, 3]);

console.log(difference(arr, itemsToExclude)); // => [1, 5]
console.log(difference(arr, 'itemsToExclude'));

