// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42){
        return distance-42;
    } else{
       return  42-distance;
    }
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264;
}
function distanceTravelledInFeet(start,destination){
    if (start < destination){
        return (destination-start)*264;
    }
    else{
        return (start-destination)*264;
    }
}
function calculatesFarePrice(start, destination){
    let charges;
    if (distanceTravelledInFeet(start, destination)<=400){
        return 0;
    }else if(distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<=2000){
        charges= (distanceTravelledInFeet(start, destination)-400)*0.02;
    }else if(distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<=2500){
        charges= 25;
    }else{
        return "cannot travel that far";
    }
    return charges;
}