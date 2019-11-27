// Array: Flatten

// Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4] .

// Second: work ‘in-place’ in the given array (do not create another). Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2] .

// Third: make your algorithm both in-place and stable . Do you need a return value?

var list = [1,[2,3],4,[]];

function flattenArray(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        var value = arr[i]
        if(Array.isArray(value)){
            for(var j = 0; j < value.length; j++){
                newArr.push(arr[i][j]);
            }
        } else {
            newArr.push(arr[i])
        }
    }   console.log(newArr);
}

flattenArray(list);