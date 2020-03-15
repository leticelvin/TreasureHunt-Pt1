var points = 0;

function addpoints() {
points = points + 5;
return points;
}

function removepoints() {
points = points - 5;
return points;
}

var chests = [chest1, chest2, chest3];
var chest1 = "empty";
var chest2 = "empty";
var chest3 = "empty";
console.log(chests);
var z;

z = Math.floor((Math.random() * 3) + 1);
console.log(z);

//chestshuffle puts the diamond in a random chest
function chestshuffle(z) {
    switch(z) {
     case (z == 1): {
        chest1 = "hasdiamond";
     }
     case (z == 2): {
        chest2 = "hasdiamond";
     }
     case (z == 3): {
        chest3 = "hasdiamond";
     }     
   }
   console.log(z);
   return z;
}

//chestshuffle();

setTimeout(function() {
for (i=0; i<1; i++) {
console.log("-----------------------")
console.log("Time to guess! Pick a chest from 1-3")
console.log(chests)
} 1000});

//different decisions depending on what number the user chooses by typing in openchest(number)
function guess(x) {
   chestshuffle(z);
   console.log(arguments[0]);
   console.log("the number for z is " + z);
   switch(x){
      case z:
         console.log(chests);
         console.log("Woohoo! You found the diamond");
         addpoints();
         console.log("Your score is "  + points);
         console.log("-----------------------");
         console.log("Time to guess! Pick a chest from 1-3")
         console.log(chests);
      break;
      case !z:
         console.log(chests);
         console.log("Muhaha! You picked the wrong chest...");
         removepoints();
         console.log("Your score is "  + points);
         console.log("-----------------------");
         console.log("Time to guess! Pick a chest from 1-3")
         console.log(chests);
      break;
      default:
         prompt("Invalid number.");
      break;
   } 
}
