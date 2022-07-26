let userChoice   
let computerChoice = Math.random();

if (computerChoice < 0.16) {
    computerChoice = "Stark";
} else if (computerChoice <= 0.32) {
    computerChoice = "Lannister";
} else if (computerChoice <= 0.48) {
    computerChoice = "Greyjoy";
} else if (computerChoice <= 0.64) {
    computerChoice  = "Baratheon"
} else if (computerChoice <= 0.80) {
    computerChoice = "Tyrell"
}
else {
    computerChoice = "Targaryen"
}
console.log("Computer: " + computerChoice);