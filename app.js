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
      var element = document.querySelectorAll('.flip-card');
      Array.prototype.forEach.call(element, node => {
        node.parentNode.removeChild(node);
      })
      newGame();
    };
  });

  function newGame() {
    //shuffle cards
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
      var space = document.createElement('div');
      space.classList.add('flip-card');
      board.appendChild(space);
      space = document.querySelectorAll('.flip-card')[i];

      var card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      space.appendChild(card);
      card = document.querySelectorAll('.card')[i];
      card.addEventListener('click', flipCard);

      var div = document.createElement('div');
      var front = document.createElement('img');
      front.setAttribute('src', 'images/castle.png');
      front.classList.add('card-face', 'front');
      card.appendChild(div);
      div.appendChild(front);

      var back = document.createElement('img');
      back.setAttribute('src', cardArray[i].img);
      back.classList.add('card-face', 'back');
      card.appendChild(back);
    }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match');
      score++;
      cards[optionOneId].querySelector('img').setAttribute('src', 'images/disneytr.png');
      cards[optionOneId].classList.toggle('is-flipped');
      cards[optionTwoId].querySelector('img').setAttribute('src', 'images/disneytr.png');
      cards[optionTwoId].classList.toggle('is-flipped');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].classList.toggle('is-flipped');
      cards[optionTwoId].classList.toggle('is-flipped');
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
      this.classList.toggle('is-flipped');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
    } else {
      alert("You cannot choose the same card!");
    }
    console.log(cardsChosen);
    console.log(cardsChosenId);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 1000)
    }
  }
  }

  newGame();
})
