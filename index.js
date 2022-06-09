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