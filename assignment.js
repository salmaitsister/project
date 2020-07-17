//------------feetToMile------------------

function feetToMile(gos){
    var feet = gos * 3;
    return feet;
}
var Mile = feetToMile(1760);
console.log(Mile ,"feet = 1 Mile.");



//------------------woodCalculator------------------

function woodCalculator(chair, table, bed){
    var qvfeet = chair + table + bed;
    return qvfeet;
    
}
var totalFeet = woodCalculator(1, 3, 5);
console.log("Total",totalFeet,"feet wood calculator.");


//----------------brickCalculator------------------

function brickCalculator(brick){
   var brickResult = brick * 10;
   return brickResult;
}
var firstFloor = brickCalculator(15);
var secondFloor = brickCalculator(12);
var thirdFloor = brickCalculator(10);
var totalBricks = firstFloor + secondFloor + thirdFloor;
console.log("one to third floor needed ",totalBricks,"feet bricks");
 

//--------------------tinyfriend--------------------------


function tinyfriend(friends){
    var lowest = friends[0];
    for (var i = 0; i < friends.length; i++){
        var currentName = friends[i];
        if(currentName > lowest){
            lowest = currentName
        }
        
    }
    return lowest;
}
var lowestname = tinyfriend(['jisun','sohag','salma','mashrafi','ratul','jakariya']);
console.log(lowestname);









