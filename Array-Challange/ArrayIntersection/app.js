function arrayIntersection(arr1, arr2) {
    let result = [];
    let iteration = false
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j] && !result.includes(arr1[i] && arr2[j])) {
                result.push(arr1[i] && arr2[j])
                iteration = true
            }
        }
    }
    if (!iteration) {
        throw new Error('No intersection found between the two arrays.');
    }
    return result
}
const array1 = [1, 2, 34, 11, 12];
const array2 = [3, 4, 5, 6, 7, 23, 11];

const result = arrayIntersection(array1, array2);

console.log(result);
