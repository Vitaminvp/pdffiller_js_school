/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
    if(Array.isArray(array) && typeof value === 'string') {
        return array.reduce((acc, cur) => {
            if(acc.hasOwnProperty(cur[value])) {
                acc[cur[value]].push(cur);
                return acc;
            } else {
                if(cur[value] !== undefined){
                    acc[cur[value]] = [cur];
                }
                return acc;
            }
        }, {});
    }
    else {
        throw new Error('Just for array and string.');
    }

}

//groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender');

console.log("groupBy", groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'ge1nder'));
//console.log("groupBy", groupBy({ gender: 'female', name: 'Jane'}, 'gender'));
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */
