// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
 
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
 
let selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
 
const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }
}
 
const fareDoubler = createFareMultiplier(2)
 
const fareTripler = createFareMultiplier(3)
 
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}

