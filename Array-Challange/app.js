// Flattern array


function flattenArray(arr) {
    let array1=[]
    if (!arr) throw new Error("Please provide an Array")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            array1.push(arr[i][j])
            
        }
    }
    return array1
    
}

console.log(flattenArray([[1, 2], [3, [4, 5]]]))
