let button = document.querySelectorAll('input');
let playerCount = 0;
let computerCount = 0;

button[0].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"


if (computerChoice < 0.11) {
    computerChoice = "Stark";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"

} else if (computerChoice <= 0.22) {
    computerChoice = "Lannister";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"

} else if (computerChoice <= 0.33) {
    computerChoice = "Greyjoy";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"

} else if (computerChoice <= 0.44) {
    computerChoice  = "Baratheon";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"

} else if (computerChoice <= 0.55) {
    computerChoice = "Tyrell";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"

} else if (computerChoice <= 0.66) {
    computerChoice = "Arryn";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"

} else if (computerChoice <= 0.77) {
    computerChoice = "Tully";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"

} else if (computerChoice <= 0.88) {
    computerChoice = "Mormont";
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"

}
else {
    computerChoice = "Targaryen"
    document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"

}

let result = document.getElementById('resultShi');

if (computerChoice == 'Stark') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Arryn') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Lannister'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Targaryen'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Greyjoy') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == "Baratheon") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} 
})

// BOUTON LANNISTER

button[1].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"


    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Targaryen') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Baratheon') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Tully'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Tyrell'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Greyjoy') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == "Lannister") {
    result.textContent = "Égalité";
} else if (computerChoice == "Mormont"){
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} 
})

// BOUTON TARGARYEN

button[2].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"

    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Lannister') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Tyrell'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Stark') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Baratheon") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Égalité";
}


console.log(computerChoice);
})

// BOUTON ARRYN

button[3].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"

    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Arryn') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} 
})

// BOUTON GREYJOY

button[4].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"


    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} 
})

// BOUTON TULLY

button[5].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"


    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tully') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Égalité";
} else if (computerChoice == "Stark"){
    result.textContent = "Égalité";
}
})
// BOUTON TYRELL

button[6].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"

    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez perdu';

} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez perdu";
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Égalité";
} else if (computerChoice == "Stark"){
    result.textContent = "Égalité";
}
})

// BOUTON BARATHEON

button[7].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"


    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');

if (computerChoice == 'Arryn') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Égalité';
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Égalité';
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez gagné";
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Égalité";
} else if (computerChoice == "Stark"){
    result.textContent = "Vous avez gagné";
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
}
})

// BOUTON MORMONT

button[8].addEventListener('click', () => {
    let computerChoice = Math.random();
    document.querySelector(".resultPlayerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"


    if (computerChoice < 0.11) {
        computerChoice = "Stark";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/stwn.png' width=150 />"
    
    } else if (computerChoice <= 0.22) {
        computerChoice = "Lannister";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/7y55.png' width=150 />"
    
    } else if (computerChoice <= 0.33) {
        computerChoice = "Greyjoy";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/w8i3.png' width=150 />"
    
    } else if (computerChoice <= 0.44) {
        computerChoice  = "Baratheon";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/k49j.png' width=150 />"
    
    } else if (computerChoice <= 0.55) {
        computerChoice = "Tyrell";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/qv29.png' width=150 />"
    
    } else if (computerChoice <= 0.66) {
        computerChoice = "Arryn";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/ej0g.png' width=150 />"
    
    } else if (computerChoice <= 0.77) {
        computerChoice = "Tully";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/yj4z.png' width=150 />"
    
    } else if (computerChoice <= 0.88) {
        computerChoice = "Mormont";
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/oyrh.png' width=150 />"
    
    }
    else {
        computerChoice = "Targaryen"
        document.querySelector(".resultComputerImg").innerHTML="<img src='https://www.zupimages.net/up/22/30/om6q.png' width=150 />"
    
    }
let result = document.getElementById('resultShi');


if (computerChoice == 'Arryn') {
    result.textContent = 'Égalité';
} else if (computerChoice == 'Tully') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Tyrell') {
    result.textContent = 'Vous avez perdu';
    computerCount++
    document.getElementById('countComputer').textContent=`${computerCount}`
} else if (computerChoice == 'Greyjoy'){
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == 'Baratheon'){
    result.textContent = 'Égalité';
} else if (computerChoice == 'Lannister') {
    result.textContent = 'Vous avez gagné';
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == "Targaryen") {
    result.textContent = "Vous avez gagné";
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
} else if (computerChoice == "Mormont"){
    result.textContent = "Égalité";
} else if (computerChoice == "Stark"){
    result.textContent = "Vous avez gagné";
    playerCount++
    document.getElementById('countUser').textContent=`${playerCount}`
}
})


