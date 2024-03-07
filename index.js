// generate random number for player 1
let randomn1 = Math.floor(Math.random() * 6) + 1

// take image basen on result generate randomn1
var randomDiceImg = "dice" + randomn1 +".png"

// set random images source based on random number
const randomImgSource = `images/${randomDiceImg}`

let img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src", randomImgSource)


// generate random number between 1-6 for player 2
let randomn2 = Math.floor(Math.random() * 6) + 1

let randomDiceImg2 = "dice" + randomn2 +".png"

let randomImgSource2 = `images/${randomDiceImg2}`

let img2 = document.querySelectorAll("img")[1]

img2.setAttribute("src", randomImgSource2)

if (randomn1 > randomn2) {
    document.querySelector("h1").innerHTML = "Player 1 WIN!!!!"
} else if (randomn2 > randomn1) {
    document.querySelector("h1").innerText = "Player 2 WIN!!!!"
} else {
    document.querySelector("h1").innerHTML = "DRAW Refresh Ulang!!!"
}