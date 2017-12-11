// Code your solution in this file!
function distanceFromHqInBlocks(number){
  if(number>42){
    return number-42;
  }else {
    return 42-number;
  }
}

function distanceFromHqInFeet(number){
        var num = distanceFromHqInBlocks(number);
        return num*264;
   }

function distanceTravelledInFeet(arg1,arg2){
    if(arg1>arg2){
        return ((arg1-arg2)*264);
    }
     else{
          return ((arg2-arg1)*264);
    }
}

function calculatesFarePrice(start, destination)
{

}
