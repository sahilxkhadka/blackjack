let sum = 0
let cards = []
let isAlive = false
let blackjack = false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = ""

function generateRandom() {
    let randomNumber = Math.floor(Math.random() *12 + 1) 
    if(randomNumber === 1) {
        return 11
    }
    else if(randomNumber >= 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    sum = 0
    isAlive = true
    let firstCard = generateRandom()
    let secondCard = generateRandom()
    cards = [firstCard, secondCard]
    sum += firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if(sum < 21) {
        message = "Would you like to draw another card?"
        isAlive = true
    }
    else if(sum === 21) {
        message = "Congrats! You got a blackjack." 
        blackjack = true
    }
    else {
        message = "Sorry! You could not get it."
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
}
function newCard() {
    if(isAlive === true && blackjack === false) {
        let card = generateRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}
