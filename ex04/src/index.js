var monitorsListArry = ["Apple", "Peach", "Berry"]

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];
    for(var i = 0; i < 3; i++){
        monitorsList.push([newMonitorsList[i], i+1]);
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArry));
module.exports = myMonitorsFunction;