function arrAvg(arr)
{
    var sum=0;
    for (var i=0; i<arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}
//Balance Point
//Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .
function balancePoint(arr)
{
var sum=0;
for (var i=0; i<arr.length; i++)
{
    sum+=arr[i];
}
leftSum=0;

for(var i=0; i<arr.length; i++)
{
    if(leftSum == sum)
    {
        return true;
    }
    leftSum+=arr[i]
    sum=sum-=arr[i]
}
return false;
}

var x=arrAvg([3,3,3,3,3]);
console.log(x);
console.log(balancePoint([1,2,4,2,1]));```