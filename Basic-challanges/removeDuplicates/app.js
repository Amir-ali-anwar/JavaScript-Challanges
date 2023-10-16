function removeDuplicates(arr){
    console.log(arr);
    let uniqueArr=[]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
       if(!uniqueArr.includes(element)){
        uniqueArr.push(element)
       }
        
    }
    return uniqueArr
}


let arr=[1, 2, 3, 2, 4, 1, 5]



console.log(removeDuplicates(arr));