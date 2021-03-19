var temp = [
 monday = [31, 32, 19, 37],
 tuesday = [29, 27, 55, 36],
 wednesday = [17, 27, 42, 46],
 thursday = [29, 52, 21, 64],
 friday = [91, 27, 31, 61],
];
function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
    for(var i = 0; i<5; i++){
        var result = 0;
        for(var j = 0; j<4; j++){
             result += newTemps[i][j];
        }
        averageDayTemp.push(result/4);
    }

    return averageDayTemp;
}
console.log(myArrayFunction(temp));

module.exports = myArrayFunction;
