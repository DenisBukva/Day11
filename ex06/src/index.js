function multiplyArrayFunction(arr) {
    var product = 1;
    var sum = 0;
    var myArrays = [...arr];
    var myArray = [];

    for(var i = 0; i < myArrays.length; i++ ){
        for(var j = 0; j < myArrays[i].length; j++){
            product *= myArrays[i][j];
            sum += myArrays[i][j];
        }
    }    
    myArray.push(product, sum);
    return myArray;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));

module.exports = multiplyArrayFunction;