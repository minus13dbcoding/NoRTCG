
// Cards
function Card(name, pack, code, rarity, color, faction, realm, cost, attack, defence, effect, image) {
    this.name = name
    this.pack = pack
    this.code = code
    this.rarity = rarity
    this.color = color
    this.faction = faction
    this.realm = realm
    this.cost = cost
    this.attack = attack
    this.defence = defence
    this.effect = effect
    this.image = image

    Card.prototype.playFromHand = function() { 
        if(!player.hand.contains(card)) {
            console.error('The card is not in the hand'); 
        }
        player.mana -= card.cost; player.field.add(card); 
        console.log('Playing ' + this.name + '...') 
    }
}

// Card Sets
// Introduction Set 1
const IP1001 = new Card("Zeus", "Introduction Pack 1", "IP1-001", "Starter", "Purple", "Ancient Gods", "Greek Pantheon", 10, 6, 6, "While Zeus is in The Rift, all Greek Pantheon Units get +2/+2", "images/Cards/IP01/IP1001 Zeus.png");
const IP1002 = new Card("Athena", "Introduction Pack 1", "IP1-002", "Starter", "Purple", "Ancient Gods", "Greek Pantheon", 9, 6, 6, "While Athena is in The Rift, all opponent units get -1/-1", "images/Cards/IP01/IP1002 Athena.png");
const IP1003 = new Card("Artemis", "Introduction Pack 1", "IP1-003", "Starter", "Yellow", "Ancient Gods", "Greek Pantheon", 8, 6, 4, "When Artemis enters The Rift, target 2 opponets cards with a cost of 3 or less and send them to The Abyss", "images/Cards/IP01/IP1003 Artemis.png");
const IP1004 = new Card("Ares", "Introduction Pack 1", "IP1-004", "Starter", "Purple", "Ancient Gods", "Greek Pantheon", 7, 5, 4, "When Ares enters The Rift, all Greek Pantheon Units get +1/0", "images/Cards/IP01/IP1004 Ares.png");
const IP1005 = new Card("Charon", "Introduction Pack 1", "IP1-005", "Starter", "Brown", "Ancient Gods", "Greek Pantheon", 6, 3, 4, "When Charon enters The Rift, discard up to 3 cards. Charon gets +1/+1 for each", "images/Cards/IP01/IP1005 Charon.png");
const IP1006 = new Card("Dionysus", "Introduction Pack 1", "IP1-006", "Starter", "Blue", "Ancient Gods", "Greek Pantheon", 5, 3, 3,  "When Dionysus enters The Rift, Draw 2 cards", "images/Cards/IP01/IP1006 Dionysus.png");
const IP1007 = new Card("Hermes", "Introduction Pack 1", "IP1-007", "Starter", "Green", "Ancient Gods", "Greek Pantheon", 4, 3, 3, "When Hermes enters The Rift, Gain 2 Realm Shards", "images/Cards/IP01/IP1007 Hermes.png");
const IP1008 = new Card("Zephyrus", "Introduction Pack 1", "IP1-008", "Starter", "Blue", "Ancient Gods", "Greek Pantheon", 3, 2, 2, "When Zephyrus enters The Rift, discard one card from your opponents hand", "images/Cards/IP01/IP1008 Zephyrus.png");
const IP1009 = new Card("Heracles", "Introduction Pack 1", "IP1-009", "Starter", "Green", "Ancient Gods", "Greek Pantheon", 2, 3, 3, "No Effect", "images/Cards/IP01/IP1009 Heracles.png");
const IP1010 = new Card("Hephaestus", "Introduction Pack 1", "IP1-010", "Starter", "Green", "Ancient Gods", "Greek Pantheon", 1, 1, 2, "No Effect", "images/Cards/IP01/IP1010 Hephaestus.png");

// Card Packs
const IP1 = [IP1001, IP1002, IP1003, IP1004, IP1005, IP1006, IP1007, IP1008, IP1009, IP1010]

// Themed Decks
// Greek Starter 
const greekStarterDeck = [IP1001, IP1002, IP1003, IP1004, IP1005, IP1006, IP1007, IP1008, IP1009, IP1010, IP1001, IP1002, IP1003, IP1004, IP1005, IP1006, IP1007, IP1008, IP1009, IP1010, IP1001, IP1002, IP1003, IP1004, IP1005, IP1006, IP1007, IP1008, IP1009, IP1010, IP1001, IP1002, IP1003, IP1004, IP1005, IP1006, IP1007, IP1008, IP1009, IP1010];

// PLayers

function Player(attack, defense, score, deck, hand, field, grave, turnMana, extraMana, turnCount) {
    this.attack = attack
    this.defense = defense
    this.score = score
    this.deck = deck
    this.cardsInDeck = this.deck.length
    this.hand = hand
    this.cardsInHand = this.hand.length
    this.field = field
    this.grave = grave
    this.turnMana = turnMana
    this.extraMana = extraMana
    this.totalMana = this.turnMana + this.extraMana
    this.turnCount = turnCount
}

let userdeck = greekStarterDeck
let aideck = greekStarterDeck

player1 = new Player(0,0, 0, userdeck, [], [], [], 0, 0, 0)
player2 = new Player(0,0, 0, aideck, [], [], [], 0, 0, 0)

//Basic Mechanics

// Displays cards in a place
function showCardNames (cards) {
    let cardNames = []
    for(let i=0; i < cards.length; i++) {
        cardNames.push(cards[i].name)
    }
    console.log(cardNames)
    return cardNames
}

// Shuffles the deck
function shuffle(deck) {
    console.log("Shuffling Deck")
    deck.sort(() => (Math.random() > .5) ? 1 : -1)
}

function displayCardInfo() {
    // Code here to display card in card info section
}

function displayHandSize() {
    let handSize = document.querySelector("#player-hand .handlist").children.length;
  }

function drawHandUI () {
    cardNames = showCardNames(player1.hand)
    const list = document.querySelector("#player-hand .handlist");
    if (list.children.length > 0) {
        for (l = cardNames.length; l > 0; l--) {
            list.removeChild(list.firstElementChild);
        }
    }
    for(let i=0; i < cardNames.length; i++) {
        document.querySelector('#player-hand .handlist').innerHTML += `<li><img src="${player1.hand[i].image}"> </li>`
        let last = document.querySelector('#player-hand .handlist').lastChild
        last.setAttribute("onClick", "alert('clicked')")
    }
}

function drawCard(drawCount, deck, hand) {
    for (i = 0; i < drawCount; i++) {
      hand.push(deck.shift());
    }
    const handSize = document.querySelector("#player-hand .handlist").children.length
    drawHandUI ()
    displayHandSize()
}

function scoreCalc(player1, player2) {
    player1.attack = 0
    player2.defense = 0
    for (i = 0; i < player1.field.length; i++) {
        player1.attack += player1.field[i].attack
    }
    for (i = 0; i < player2.field.length; i++) {
        player2.defense += player2.field[i].defense
    }
    player1.score = player1.attack - player2.defense
}

// Sets up game start
function gameStart() {
    console.log("Game Started")
    totalTurns = 0
    userdeck = greekStarterDeck
    aideck = greekStarterDeck
    player1 = new Player(0,0, 0, userdeck, [], [], [], 0, 0, 0)
    player2 = new Player(0,0, 0, aideck, [], [], [], 0, 0, 0)
    shuffle(player1.deck)
    shuffle(player2.deck)
    showCardNames(player1.deck)
    drawCard(5,player1.deck, player1.hand)
    drawCard(5,player2.deck, player2.hand)
    }      
      

// displays game syaye
function gameState() {
    console.log("Turn: " + totalTurns)
    console.log("")
    console.log(`Player 2: ${player2.score}`)
    console.log("")
    console.log("Realm Shards: " + player2.totalMana)
    console.log(player2.hand.length)
    showCardNames(player2.field)
    let currentDeck2 = player2.cardsInDeck - (player2.hand.length + player2.grave.length)
    console.log(currentDeck2) 
    console.log("")
    console.log(`Player 1: ${player1.score}`)
    console.log("")
    console.log("Realm Shards: " + player1.totalMana)
    showCardNames(player1.hand)
    showCardNames(player1.field)
    let currentDeck1 = player1.cardsInDeck - (player1.hand.length + player1.grave.length)
    console.log(currentDeck1) 
    console.log("")
}

// this happens at the start of every turn for human and ai
function turnStart(player) {
    if (player.turnMana <= 10) {
        player.turnMana++
        player.totalMana = player.turnMana + player.extraMana
    }
    player.turnCount++
    totalTurns = player1.turnCount + player2.turnCount
    drawCard(1,player.deck, player.hand)
    gameState()
}

function turnEnd(player1, player2) {
    if (totalTurns === 30) {
        console.log("The turn limit has been reached")
        scoreCalc(player1, player2)
        scoreCalc(player2, player1)
        gameState()
    } else {
        console.log("The Game Continues")
        scoreCalc(player1, player2)
        scoreCalc(player2, player1)
        gameState()
    }
}

//HTML
function updateScore_bottomright() {
    document.getElementById("bottom-left-score").innerHTML = player1.score;
}
