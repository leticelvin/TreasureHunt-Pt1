var points = 0;

function addpoints() {
points = points + 5;
return points;
}

function removepoints() {
points = points - 5;
return points;
}

var chest1 = "x";
var chest2 = "x";
var chest3 = "x";
var chests = [chest1, chest2, chest3];
var concealedchests = [chest1, chest2, chest3];
var z;
z = Math.floor((Math.random() * 3) + 1);

//chestshuffle puts the diamond in a random chest
function chestshuffle(z) {
   switch(z) {
     case 1:
        chests[0] = "v";
        chests[1] = "x";
        chests[2] = "x";
      break;
     case 2:
        chests[0] = "x";
        chests[1] = "v";
        chests[2] = "x";
      break;
     case 3: 
        chests[0] = "x";
        chests[1] = "x";
        chests[2] = "v";
      break;
      default:
      break;          
   }
   return z;

}
//chestshuffle();

setTimeout(function() {
for (i=0; i<1; i++) {
console.log("-----------------------")
console.log("Time to guess! Pick a chest from 1-3")
console.log(chests) //Matches the video
console.log(z);
} 1000});

//different decisions depending on what number the user chooses by typing in openchest(number)
function guess(x) {
   chestshuffle(z);
   //console.log(arguments[0]);
   if (x == z) {
         console.log(chests);
         console.log("Woohoo! You found the diamond");
         addpoints();
         console.log("Your score is "  + points);
         console.log("-----------------------");
         console.log("Time to guess! Pick a chest from 1-3")
         console.log(concealedchests);
         z = Math.floor((Math.random() * 3) + 1);
         chestshuffle()
      } else {
         console.log(chests);
         console.log("Muhaha! You picked the wrong chest...");
         removepoints();
         console.log("Your score is "  + points);
         console.log("-----------------------");
         console.log("Time to guess! Pick a chest from 1-3")
         console.log(concealedchests);
         z = Math.floor((Math.random() * 3) + 1);
         chestshuffle()
   } 
}
