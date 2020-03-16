
ansArray = [];
function greaterThan(array , Number){
array=[1,2,3,4,5,6,7,8,9];
for(var i = 0; i< array.length ; i++){
    if( array[i] > Number){
        ansArray.push(array[i])
    }
}
}
greaterThan([1,2,3,4,5,6,7,8,9],5);
console.log(ansArray);