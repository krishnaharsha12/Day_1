let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorinoRomano = 50;
let blackPepper = 4;
let water = 5000;
let salt = 20;


console.log("INGREDIENTS");
console.log("\nSPAGHETTI: ", spaghetti); 
console.log("\nGUANCIALE: ", guanciale);
console.log("\nPECORINO ROMANO: ", pecorinoRomano);
console.log("\nRAW BLACK PEPPER: ", blackPepper);
console.log("\nWATER: ", water);
console.log("\nSALT: ", salt);

let eggsAndCheese = eggYolks + pecorinoRomano;
console.log("\nMix EGG YOLKS AND PECORINOROMANO: ", eggsAndCheese);
let rawEggSauce = eggsAndCheese + pinchOfBlackPepper;
console.log("\nAdd A PINCH OF PEPPER: ", rawEggSauce);

let pot = water + salt;
console.log("\nBOILING THE WATER WITH A LITTLE SALT: ", pot);
pot += spaghetti;
console.log("\nDROPPING SPAGHETTI IN THE WATER: ", pot);

let fryPan = guanciale + pastaWater;
console.log("\nCREATING THE SAUCE WITH GUANCIALE AND PASTA WATER: ", fryPan);
console.log(blackPepper);
let carbonara = cookedSpaghetti + fryPan + rawEggSauce + blackPepper; 