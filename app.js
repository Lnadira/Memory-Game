document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'daisy',
      img: 'images/daisy.gif'
    },
    {
      name: 'donald',
      img: 'images/donald.gif'
    },
    {
      name: 'goofy',
      img: 'images/goofy.gif'
    },
    {
      name: 'mickey',
      img: 'images/mickey.gif'
    },
    {
      name: 'minnie',
      img: 'images/minnie.gif'
    },
    {
      name: 'pluto',
      img: 'images/pluto.gif'
    },
    {
      name: 'daisy',
      img: 'images/daisy.gif'
    },
    {
      name: 'donald',
      img: 'images/donald.gif'
    },
    {
      name: 'goofy',
      img: 'images/goofy.gif'
    },
    {
      name: 'mickey',
      img: 'images/mickey.gif'
    },
    {
      name: 'minnie',
      img: 'images/minnie.gif'
    },
    {
      name: 'pluto',
      img: 'images/pluto.gif'
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const board = document.querySelector('.board');
  const scoreDisplay = document.querySelector('#score')
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/castle.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/disney.png');
      cards[optionTwoId].setAttribute('src', 'images/disney.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/castle.png');
      cards[optionTwoId].setAttribute('src', 'images/castle.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    scoreDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardsArray.length/2) {
      scoreDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard();
})
