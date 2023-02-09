
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el")
let startButton = document.querySelector("#button-start-el")
let drawButton = document.querySelector("#button-draw-el")
let newButton = document.querySelector("#button-new-el")


startButton.addEventListener("click", startGame)
drawButton.addEventListener("click", newCard)
newButton.addEventListener("click", newGame)


function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {on
        return 10 
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function newGame() {
    cardEl.textContent = "Cards: "
    messageEl.textContent = "Want to play another?"
    sumEl.textContent = "Sum: "

}