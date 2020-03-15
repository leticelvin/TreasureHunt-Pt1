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
console.log("Time to guess! Pick a chest from 1-3")} 1000});

//different decisions depending on what number the user chooses by typing in openchest(number)
function openchest(x) {
   chestshuffle(z);
   console.log("the number for z is " + z);
   switch(x){
      case(x == z):
         console.log("Woohoo! You found the diamond");
         addpoints();
         console.log("Your score is "  + points);
         console.log("Time to guess! Pick a chest from 1-3")
      break;
      case(x != z):
         console.log("Muhaha! You picked the wrong chest...");
         removepoints();
         console.log("Your score is "  + points);
         console.log("Time to guess! Pick a chest from 1-3")
      break;
      case(x > 3):
         prompt("Invalid number.");
      break;
   } 
}