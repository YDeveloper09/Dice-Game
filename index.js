
function randomgen() {
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    let randomdice = "/d" + randomnumber +".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomdice);
    let randomnumber2 = Math.floor(Math.random() * 6) + 1;
    let randomdice2 = "/d" + randomnumber2 +".png";
    document.querySelectorAll("img")[2].setAttribute("src",randomdice2);
    if (randomnumber > randomnumber2){
    document.querySelector("h1").innerText = "Player 1 Win!";
    }else if (randomnumber < randomnumber2){
    document.querySelector("h1").innerText = "Player 2 Win!";
    }else{ (randomnumber === randomnumber2)
    document.querySelector("h1").innerText = "Draw! Play Again";
    }
}



