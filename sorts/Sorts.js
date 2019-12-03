function bubbleSort(arr) {
    let temp = 0;
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        for(let j = 0; j < arr.length; j++) {
            console.log(arr[j], arr[j+1]);
            if(arr[j] < arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                isSorted = false;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([3,4,6,10,2,5,7,8,9,1]));

function swap (arr, one, two) {
    let temp = arr[one];
    
    arr[one] = arr[two]
    arr[two] = temp;
}

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let y = i + 1; y < arr.length; y++){
            if(arr[y] < arr[min]){
                min = y;
                console.log(arr[y])
            }
        }
        if(min != i){
            swap(arr, i, min);
        }
    }
    return arr
}
console.log(selectionSort([1,5,3,6,7,2,10]))