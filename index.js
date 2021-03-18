"use strict";

let destinationArray = ["Puerto Rico", "Mexico", "California", "Delaware", "Pocnos"];
let restaurantArray = ["Red Lobster", "Olive Garden", "Bertuccis", "Tonic"];
let transportationArray = ['Uber', 'Rent a Car', 'Shuttle'];
let entertainmentArray = ['kayaking', 'Zip Line', 'Museum', 'Water Park'];


function selectRandom(array)
{
    let getRandom = Math.floor(Math.random() * array.length);
    return array[getRandom];
}

let getRandomDestination = selectRandom(destinationArray);
console.log(getRandomDestination);


    
let getRandomRestaraunt = selectRandom(restaurantArray);
console.log(getRandomRestaraunt)


let getRandomTranspotation = selectRandom(transportationArray);
console.log(getRandomTranspotation);



let getRandomEntertainment = selectRandom(entertainmentArray);
console.log(getRandomEntertainment);


let mybool = false;

    

while(mybool == false){


function userReroll(){
    let myPrompt = prompt('Enter 1 to change Destination, Enter 2 to change Restauraunt, Enter 3 to change Transportation, Enter 4 to change Entertainment, Enter 5 if Happy!');
    switch(myPrompt)
    {
        case '1':
            getRandomDestination = selectRandom(destinationArray);
            console.log(getRandomDestination);
            mybool = true;
            break;
            
            case '2' :
                getRandomRestaraunt = selectRandom(restaurantArray);
                console.log(getRandomRestaraunt);
                mybool = true;
                break;
                
                case '3' :
                    getRandomTranspotation = selectRandom(transportationArray);
                    console.log(getRandomTranspotation);
                    mybool = true;
                    break;
                    case '4' :
                        getRandomEntertainment = selectRandom(entertainmentArray) ;
                        console.log(getRandomEntertainment);
                        mybool = true;
                        break;
                        
                        case '5' :
                            console.log('Print Your Trip, Enjoy!');
                            mybool = true;
                            break;  
                            
                            
                           
    }

}
  
userReroll();

}
