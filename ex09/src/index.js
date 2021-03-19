function myBouncer(arr){
    var newArray = [];
    var myArrLenght = arr.length;
    var filtered = arr.filter(Boolean)
    return filtered;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;