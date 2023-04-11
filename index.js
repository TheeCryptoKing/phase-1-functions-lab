// Code your solution in this file!
//1.create a function that returns a number of block
//42nd street is scubers headquarters
let headQuarters = 42;
function distanceFromHqInBlocks(lotion) {
     //if an else needed for negative and positive distance feed to keep it positive and write out the distance positvely 
    if (lotion > 42) {
        return(lotion - headQuarters);//could've jsut used 42 instead of a constant
    } else if(lotion < 42) { // could've used else and no argument, it ould have worked either way your overthining it 
        return(headQuarters - lotion); 
    }
}//could have used absolute attribute


//Returns the number of feet from Scuber's headquarters to the pickup location.Use Previous function to help
function distanceFromHqInFeet(lotion){ //Have to put the input here so the function will allow it to be returned
    return(distanceFromHqInBlocks(lotion) * 264);
}


//2. returns the number of feet
function distanceTravelledInFeet(start, destination) {

    return (Math.abs(start - destination) * 264);
} 


//.3 Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. 
function calculatesFarePrice(start, destination) {
    let calculatedDis = distanceTravelledInFeet(start, destination);// because declared as a const no need for () when recalling
    if (calculatedDis <= 400) { // if wasnt declared every time nedd to write as (calculatedDis)
        return (0);
    } else if (calculatedDis >= 400 && calculatedDis <= 2000) {
        return (calculatedDis - 400) * 0.02;
    } else if (calculatedDis >= 2000 && calculatedDis <= 2500) {
        return (25);
    } else if (calculatedDis > 2500) {
        return 'cannot travel that far';
    }
}

//npm test