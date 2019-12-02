
function bubbleSort(arr) {
    let temp = 0;
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let j=0; j<arr.length; j++){
            if(arr[j] < arr[j + 1]){
                isSorted = false;
                temp = arr[j];
                console.log(arr[j], "*");
                arr[j] = arr[j + 1];
                console.log(arr[j + 1], "***");
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([3,4,6,10,2,5,7,8,9,1]));
console.log(bubbleSort([2,3,5,4,1]));