let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard() {
    card = Math.floor(Math.random() * 13) + 1;
    if(card == 1) return 11
    if(card > 10) return 10
    return card;
}


function startGame() {
    // Card 1
    let firstCard = getRandomCard()
    // Card 2 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
        cardsEl.textContent += " " + cards[i]


    sumEl.textContent = "Sum: " + sum

    if(sum < 21) {
        message = "Do you want to draw a new card?"
        isAlive = true
    }
    else if (sum === 21) {
        message = "You've got Blackjack!!!"
        hasBlackJack = true
        isAlive = true
    }
    else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard()
    
        sum += card
    
        cards.push(card)
    
        renderGame()
    }
}