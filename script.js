let username = document.getElementById('user-name');
let userName = document.getElementById('username');
let enterBtn = document.getElementById('enter');
let error = document.getElementById('error');
let score = document.getElementById('score');
let section = document.getElementById('section');
let categoryName = document.getElementById('category-name')
let category1Btn = document.getElementById('category1btn');
let category2Btn = document.getElementById('category2btn');
let category3Btn = document.getElementById('category3btn');
let category4Btn = document.getElementById('category4btn');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let startScreen = document.getElementById('start-screen');
let displayContainer = document.getElementById('display-container');
let resultContainer = document.getElementById('result-container');
let nextBtn = document.getElementById('next-btn');
let question = document.getElementById('question');
let countOfQuestion = document.getElementById('number-of-question');
let goToHome = document.getElementById('gotohome');
let startAgain = document.getElementById('startagain');
let time = document.getElementById('time');
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');
let percentage = document.getElementById('percentage');
let questionCount;
let scoreCount = 0;
let count = 11;
let attempted = 0;
let attemptedQue = document.getElementById('attempted');
let totalTime = 0;
let timeTaken = document.getElementById('timetaken');
let yourScore = document.getElementById('yourscore');

//Code Of Questions on Pipes And Cisterns
const quizArray = [
  {
    id: '0',
    question:
      ' It takes 20 minutes for pipe A to fill the tank completely and it takes 30  minutes for pipe B to fill the tank completely. If both the inlets are opened together, then how much time will be taken to fill the tank completely',
    options: ['10 mins', '12 mins', '15 mins', '20 mins'],
    correct: '12 mins',
  },
  {
    id: '1',
    question:
      'If two pipes can fill a tank in 24 and 20 minutes respectively and another pipe can empty 3 gallons of water per minute from that tank. When all the three pipes are working together, it takes 15 minutes to fill the tank. What is the capacity of the tank?',
    options: ['200 gallons', '180 gallons', '120 gallons', '100 gallons'],
    correct: '120 gallons',
  },
  {
    id: '2',
    question:
      'It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?',
    options: [
      '18 hours',
      '45 hours',
      '20 hours',
      '14 hours',
    ],
    correct: '14 hours',
  },
  {
    id: '3',
    question:
      ' Two pipes P and Q can fill a cistern in 12 and 15 minutes respectively. Both are opened together, but at the end of 3 minutes the first is turned off. How much longer will the cistern take to fill?',
    options: ['91/4 min', '111/4 min', '71/4 min', '81/2min'],
    correct: '111/4 min',
  },
  {
    id: '4',
    question:
      ' Two taps can separately fill a cistern 10 minutes and 15 minutes respectively and when the waste pipe is open, they can together fill it in 18 minutes. The waste pipe can empty the full cistern in?',
    options: ['10 minutes', '9 minutes', '15 minutes', '18 minutes'],
    correct: '9 minutes',
  },
  {
    id: '5',
    question:
      'Two pipes A and B can fill a tank in 4 and 5 hours respectively. If they are turned up alternately for one hour each, the time taken to fill the tank is?',
    options: ['2 hrs 15 min', '4 hrs 24 min', '5 hrs', '3 hrs'],
    correct: '4 hrs 24 min',
  },
  {
    id: '6',
    question:
      'A water tank is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty in 6 minutes. If both the pipes are open, how long will it take to empty or fill the tank completely?',
    options: [
      '6 min to empty',
      '7 min to full',
      '6 min to full',
      '7 min to empty',
    ],
    correct: '6 min to empty',
  },
  {
    id: '7',
    question:
      ' A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?',
    options: ['16 hrs', '20 hrs', '25 hrs', '40 hrs'],
    correct: '40 hrs',
  },
  {
    id: '8',
    question:
      'Two pipes A and B can separately fill a cistern in 10 and 15 minutes respectively. A person opens both the pipes together when the cistern should have been was full he finds the waste pipe open. He then closes the waste pipe and in another 4 minutes the cistern was full. In what time can the waste pipe empty the cistern when fill?',
    options: ['10 min', '8 min', '16 min', '20 min'],
    correct: '8 min',
  },
  {
    id: '9',
    question:
      'Two pipes X and Y can fill a tank in 24 minutes and 36 minutes respectively. If both the pipes are opened simultaneously, after what time should Y be closed so that the tank is full in 18 minutes?',
    options: ['6 min', '12 min', '10 min', '9 min'],
    correct: '9 min',
  },
];
//Code Of Question On Probablity
const quizArray2 = [
  {
    id: '0',
    question:
      ' A box contains nine bulbs out of which 4 are defective. If four bulbs are chosen at random, find the probability that exactly three bulbs are good.',
    options: [
      '20/31',
      '20/60',
      '20/63',
      '20/50',
    ],
    correct: '20/63',
  },
  {
    id: '1',
    question: ' A box contains 3 blue marbles, 4 red, 6 green marbles and 2 yellow marbles. If three marbles are picked at random, what is the probability that they are all blue?',
    options: ['1/455', '1/455', '1/91', '4/445'],
    correct: '1/455',
  },
  {
    id: '2',
    question:
      'A box contains 3 blue marbles, 4 red, 6 green marbles and 2 yellow marbles. If two marbles are drawn at random, what is the probability that at least one is green?',
    options: ['23/35', '29/35', '43/70', '22/55'],
    correct: '23/35',
  },
  {
    id: '3',
    question:
      ' A box contains 3 blue marbles, 4 red, 6 green marbles and 2 yellow marbles. If three marbles are drawn what is the probability that one is yellow and two are red?',
    options: ['24/455', '18/455', '12/455', '15/91'],
    correct: '12/455',
  },
  {
    id: '4',
    question:
      'What is the probability of getting an even number when a dice is thrown?',
    options: ['1/6', '1/2', '1/3', '1/4'],
    correct: '1/2',
  },
  {
    id: '5',
    question:
      'The probability of getting two tails when two coins are tossed is -',
    options: ['1/6', '1/2', '1/3', '1/4'],
    correct: '1/4',
  },
  {
    id: '6',
    question:
      '10 books are placed at random in a shelf. The probability that a pair of books will always be together is -',
    options: ['1/5', '1/3', '1/6', '1/4'],
    correct: '1/5',
  },
  {
    id: '7',
    question:
      'In a party there are 5 couples. Out of them 5 people are chosen at random. Find the probability that there are at the least two couples?',
    options: ['5/21', '5/14', '9/14', '1/3'],
    correct: '5/21',
  },
  {
    id: '8',
    question:
      'What is the probability of getting 1 and 5 if a dice is thrown once?',
    options: ['1/6', '1/3', '2/3', '8/9'],
    correct: '1/3',
  },
  {
    id: '9',
    question:
      ' From a pack of cards two cards are drawn one after the other, with replacement. The probability that the first is a red card and the second is a king is -',
    options: ['1/26', '15/26', '11/26', '1/13'],
    correct: '1/26',
  },
];
//Code Of Questions On Ages 
const quizArray3 = [
  {
    id: '0',
    question:
      "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter\'s age, then further after 5 years, how many times he would be of his daughter\'s age?",
    options: ['1.5 times', '2 times', '2.5 times', '3 times'],
    correct: '2.5 times',
  },
  {
    id: '1',
    question:
      'The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
    options: ['6 years', '4 years', '8 years', '10 years'],
    correct: '4 years',
  },
  {
    id: '2',
    question:
      'A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?',
    options: ['7 years', '8 years', '15 years', '10 years'],
    correct: '10 years',
  },
  {
    id: '3',
    question:
      'One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?',
    options: ['5 years', '25 years', '10 years', '15 years'],
    correct: '10 years',
  },
  {
    id: '4',
    question:
      'Ten years ago, the age of mother was three times the age of her son. After ten years, mother&rsquo;s age will be twice that of his son. Find the ratio of their present ages.',
    options: ['11 : 7', '9 : 5', '7 : 4', '7 : 3'],
    correct: '7 : 3',
  },
  {
    id: '5',
    question:
     "Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?",
    options: ['2 years', '6 years', '40 years', '8 years'],
    correct: '6 years',
  },
  {
    id: '6',
    question:
      "The age of father 10 years ago was thrice the age of his son. Ten years hence, father's age will be twice that of his son. The ratio of their present ages is:",
    options: ['2:5', '7:3', '5:2', '2:9'],
    correct: '7:3',
  },
  {
    id: '7',
    question:
      "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?",
    options: ['2 years', '4 years', '1 years', 'Data inadequate'],
    correct: 'Data inadequate',
  },
  {
    id: '8',
    question:
      "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
    options: ['12 years', '16 years', '18 years', '20 years'],
    correct: '20 years',
  },
  {
    id: '9',
    question:
      'Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?',
    options: ['24.5 years', '30 years', '21 years', '27years'],
    correct: '24.5 years',
  },
];
// Code Of Questions On Profit And Loss
const quizArray4 = [
  {
    id: '0',
    question:
      'By selling an article for Rs 600 more, Karthik would have made 5% profit on his sale instead of a 11% loss. What was his cost price?',
    options: ['Rs. 3750', 'Rs. 5000', 'Rs. 4000', 'Rs. 4860'],
    correct: 'Rs. 3750',
  },
  {
    id: '1',
    question:
      ' I make a profit of 20% by selling an article. What would be the profit percent if it were calculated on the selling price instead of the cost price?',
    options: ['10%', '16.67%', '20%', '18.31%'],
    correct: '16.67%',
  },
  {
    id: '2',
    question:
      '. Divya made a profit of 25% when selling a Salwar Kameez at Rs. 4,000. Find the cost price of the same dress.',
    options: ['Rs. 2500', 'Rs. 5000', 'Rs. 3750', 'Rs. 3200'],
    correct: 'Rs. 3200',
  },
  {
    id: '3',
    question:
      'Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.',
    options: ['Rs. 6000', 'Rs. 7500', 'Rs. 3500', 'Rs. 4500'],
    correct: 'Rs. 4500',
  },
  {
    id: '4',
    question:
      'If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is',
    options: ['25% loss', '20% loss', '25% gain', '20% gain'],
    correct: '20% gain',
  },
  {
    id: '5',
    question:
      'Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is',
    options: ['Neither gain nor loss', '2.5% gain', '2.5% loss', '0.25% loss'],
    correct: '0.25% loss',
  },
  {
    id: '6',
    question:
      ' A tradesman marks his goods 25% above the cost price and allows his customers 12 % reduction on their bills. What percent profit does he make?',
    options: ['10%', '20%', '25%', '30%'],
    correct: '10%',
  },
  {
    id: '7',
    question:
      'An orange vendor makes a profit of 10% by selling oranges at a certain price. If he charges Rs. 1.4 higher per orange he would gain 30%. Find the original price at which he sold an orange.',
    options: ['Rs. 4', 'Rs. 4.50', 'Rs. 7.50', 'Rs. 8'],
    correct: 'Rs. 7.50',
  },
  {
    id: '8',
    question:
      'A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?',
    options: ['20:23', '23:20', '16:23', '23:16'],
    correct: '16:23',
  },
  {
    id: '9',
    question:
      'Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?',
    options: ['25%', '20%', '45%', '50%'],
    correct: '20%',
  },
];
// When we Hit the Enter Button following actions will be done
enterBtn.addEventListener('click', () => {
  if (isNaN(username.value)) {
    userName.innerText = username.value;
    username.classList.remove('err');
    error.classList.add('green');
    error.innerHTML = '👋 HELLO ' + username.value + ' Select Category Below  👇';
    /* -------------------------------- category1 ------------------------------- */
    category1Btn.addEventListener('click', () => {
     nextQue(quizArray);
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = "visible"
        checker(e.target, quizArray);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
    });
    /* -------------------------------- category2 ------------------------------- */
    category2Btn.addEventListener('click', () => {
      nextQue(quizArray2);
       categoryName.innerText = 'Probablity';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray2);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
    });
    /* -------------------------------- category3 ------------------------------- */
    category3Btn.addEventListener('click', () => {
      nextQue(quizArray3);
       categoryName.innerText = 'Problem On Ages';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray3);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
    });
    /* -------------------------------- category4 ------------------------------- */
    category4Btn.addEventListener('click', () => {
      nextQue(quizArray4);
      categoryName.innerText = 'Profit And Loss';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray4);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
    });
  } else {
    error.innerHTML = 'Note:-Please enter your valid name first';
    username.classList.add('err');
  }
  
  /* --------------------------------- Notification to User--------------------------------- */
  username.addEventListener('input', () => {
    if (username.value.trim() === '') {
      username.classList.add('err');
      error.innerHTML = 'Please enter your name first';
    } else {
      username.classList.remove('err');
    }
  });
});
 
category1Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category2Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category3Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category4Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
username.addEventListener('input', () => {
  if (username.value.trim() === '') {
    username.classList.add('err');
    error.innerHTML = 'Please enter your name first';
  } else {
    username.classList.remove('err');
  }
});

function nextQue(catNo) {
  nextBtn.addEventListener(
    
    'click',
    (displayNext = () => {
      nextBtn.style.visibility = 'hidden';
      time.classList.remove('red');
      clearInterval(countdown);
      timerDisplay();
      option1.classList.remove('correct');
      option2.classList.remove('correct');
      option3.classList.remove('correct');
      option4.classList.remove('correct');
      option1.classList.remove('incorrect');
      option2.classList.remove('incorrect');
      option3.classList.remove('incorrect');
      option4.classList.remove('incorrect');
      option1.disabled = false;
      option2.disabled = false;
      option3.disabled = false;
      option4.disabled = false;
      questionCount++;
      if (questionCount === catNo.length) {
        clearInterval(countdown);
        displayContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        result(catNo);
      } else {
        if (questionCount === catNo.length - 1) {
          nextBtn.innerText = 'Finish';
        }
        quizDisplay(questionCount, catNo);
        countOfQuestion.innerHTML = questionCount + 1 + '/' + catNo.length;
      }
    })
  );
}

goToHome.addEventListener('click', () => {
  location.reload();
});
function startAgainFunc(catNo) {
  startAgain.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    displayContainer.classList.remove('hide');
    nextBtn.innerText = 'Next Question';
    attempted = 0;
    totalTime = 0;
    score.innerText = `SCORE:0`;
    clearInterval(countdown);
    initial(catNo);
  });
}


function quizDisplay(questionCount, catNo) {
  countOfQuestion.innerHTML = questionCount + 1 + '/' + quizArray.length;
  question.innerHTML = catNo[questionCount].question;
  option1.innerHTML = catNo[questionCount].options[0];
  option2.innerHTML = catNo[questionCount].options[1];
  option3.innerHTML = catNo[questionCount].options[2];
  option4.innerHTML = catNo[questionCount].options[3];
}

function checker(userselectedopt, catNo) {
  attempted++;
  let userselectedoption = userselectedopt.innerText;
  if (userselectedoption === catNo[questionCount].correct) {
    const audio = document.createElement('audio');
    audio.setAttribute('autoplay', '');
    audio.setAttribute('src', 'correct.mp3');
    section.appendChild(audio);
    userselectedopt.classList.add('correct');
    scoreCount++;
    score.innerText = 'SCORE:' + scoreCount;
  } else {
    const audio = document.createElement('audio');
    audio.setAttribute('autoplay', '');
    audio.setAttribute('src', 'incorrect.mp3');
    section.appendChild(audio);
      if (navigator) {
        navigator.vibrate(500);
      }
    userselectedopt.classList.add('incorrect');
    if (option1.innerText === catNo[questionCount].correct) {
      option1.classList.add('correct');
    }
    if (option2.innerText === catNo[questionCount].correct) {
      option2.classList.add('correct');
    }
    if (option3.innerText === catNo[questionCount].correct) {
      option3.classList.add('correct');
    }
    if (option4.innerText === catNo[questionCount].correct) {
      option4.classList.add('correct');
    }
  }
  clearInterval(countdown);
  totalTime += count;
  option1.disabled = true;
  option2.disabled = true;
  option3.disabled = true;
  option4.disabled = true;
}
function result(catNo) {
  correct.innerText = scoreCount;
  percentage.innerText = (scoreCount * 100) / 10 + '.00%';
  attemptedQue.innerText = attempted;
  wrong.innerText = attempted - scoreCount;
  timeTaken.innerText = totalTime;
  yourScore.innerText = scoreCount;
  startAgainFunc(catNo)
}
const timerDisplay = () => {
  count = 11;
  countdown = setInterval(() => {
    count--;
    time.innerHTML = `${count}s`;
    if (count == 0) {
      time.classList.add('red');
      clearInterval(countdown);
      displayNext();
    }
    if (count < 6) {
      time.classList.add('red');
    }
  }, 1000);
};
function initial(catNo) {
  questionCount = 0;
  scoreCount = 0;
  timerDisplay();
  quizDisplay(questionCount, catNo);
}
