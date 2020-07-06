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

  const resetBtn = document.querySelector('#reset-button');
  resetBtn.addEventListener('click', () => {
    if(confirm("Start a new game?")) {
      var element = document.querySelectorAll('img');
      Array.prototype.forEach.call(element, node => {
        node.parentNode.removeChild(node);
      })
      newGame();
    };
  });

  function newGame() {

    cardArray.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board');
    const scoreDisplay = document.querySelector('#score')
    score = 0;
    scoreDisplay.textContent = score;
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create the board
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/castle.png');
      card.setAttribute('data-id', i);
      card.classList.add('hidden');
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match');
      score++;
      cards[optionOneId].setAttribute('src', 'images/castle.png');
      cards[optionTwoId].setAttribute('src', 'images/castle.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cards[optionOneId].style.filter = "hue-rotate(170deg) brightness(270%) saturate(150%)";
      cards[optionTwoId].style.filter = "hue-rotate(170deg) brightness(270%) saturate(150%)";
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/castle.png');
      cards[optionTwoId].setAttribute('src', 'images/castle.png');
      cards[optionOneId].classList.add('hidden');
      cards[optionTwoId].classList.add('hidden');
      //alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    scoreDisplay.textContent = score;
    if (cardsWon.length === cardArray.length/2) {
      scoreDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    if(!cardsChosenId.includes(cardId)) {
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img)
      this.classList.remove('hidden');
    } else {
      alert("You cannot choose the same card!");
    }

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
}

  newGame();
})
