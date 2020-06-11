/* eslint-disable no-undef */
/**
 * Example store structure
 */
const store = {
  
  questions: [
    {
      question: `What was the name of the trade route that was responsible for the 
      Exchange of cultures between  China, India, Persia, Arabia, Greek and Rome.
      `,
      answers: [
        'Spice route',
        'Amber Road',
        'Via Maris',
        'Silk road'
      ],
      correctAnswer: 'Silk road',
      image : 'images/questions/silk-road-rome-.jpg',
      alt : 'Road',
      correct : 'Good job! Not a lot of people know that one! ',
      incorrect : 'The Silk Road was a network of trade routes which connected the east and west, and was central to the economic, cultural, political, and religious interactions between these regions from the 2nd century BCE to the 18th century.'
    },
    {
      question: 'What came after the Bronze age?',
      answers: [
        'Iron Age',
        'Dark Age\'s ',
        'Industrial revolution',
        'Middle Ages'
      ],
      correctAnswer: 'Iron Age',
      image : 'images/questions/bronze.jpg',
      alt : 'helmet',
      correct : 'I think you deserve a medal for that one.',
      incorrect : 'Between 500 BC – 332 BC the Age of Iron took place. It was preceded by the Stone Age and the Bronze Age.'
    },
    {
      question: 'What was one of the 1st forms of currency?',
      answers: [
        'Shekels',
        'Cowrie',
        'Silver',
        'Gold'
      ],
      correctAnswer : 'Cowrie',
      image : 'images/questions/Trading.jpg',
      alt : 'trade',
      correct : 'Wonderful! Not a lot of people get that one.',
      incorrect : 'You might not think it, but people a long time ago before gems and gold even had relevance, would trade shells called cowrie for goods.'
    },
    {
      question: 'What was the early form of government?',
      answers: [
        'Oligarchy',
        'Anarchy',
        'Monarchy',
        'Democracy'
      ],
      correctAnswer : 'Monarchy',
      image : 'images/questions/Old-Government-Buildings.jpg',
      alt : 'building',
      correct : 'Yep! I can see your really ruling over this quiz. ',
      incorrect : 'Nope, actually Monarchies were the first form of government. The earliest monarchies that we know about are the ones in Sumer and Egypt. These both began around 3000 BC.'
    },
    {
      question: 'What is the most traded item in the world?',
      answers: [
        'Cars',
        'Tea',
        'Oil',
        'Spice\'s'
      ],
      correctAnswer : 'Cars',
      image : 'images/questions/goods.jpg',
      alt : 'shipping-create',
      correct : 'Good job, I can see your really driving through these questions…',
      incorrect : 'Close, but cars are the most traded item in the world. Cars accounted for about $1.35 trillion of the world trade, as of 2018.'
    },
    {
      question: 'Who was the first person in outer space?',
      answers: [
        'Neil Armstrong',
        'Yuri Gagarin',
        'Valentina Tereshkova',
        'Virgil Grissom'
      ],
      correctAnswer : 'Yuri Gagarin',
      image : 'images/questions/space.png',
      alt : 'space',
      correct : 'Stellar! Not a lot of people get that one.',
      incorrect : 'Nope, Neil Armstrong might have been the first person on the moon, and Valentina Vladimirovna was the first woman in space,  but the first person in space was Russia\'s Yuri Gagarin, who left this world\'s atmosphere on April 12, 1961.' 
    },
    {
      question: 'Which of the following inventions was the first to be patented?',
      answers: [
        'Car',
        'Rubber band',
        'Potash',
        'Chewing Gum'
      ],
      correctAnswer : 'Potash',
      image : 'images/questions/old-style-bicycle.jpg',
      alt : 'bike',
      correct : 'Well that answer deserves a seal of approval.',
      incorrect : 'Nope. I honestly thought it was rubber bands when I was writing this, but I came to find that is actually a method to make Potash, a common ingredient for fertilizer'
    },
  ],
  quizStarted: false,
  // questions.length
  questionNumber: 0,
  // increment score when correct answer
  score: 0 , 

  onQuestion : false
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */
/********** TEMPLATE GENERATION FUNCTIONS **********/






function startPageGenerator(){
  return `<div class="box start">
            <h2>start quiz</h2>
            <p>Hello welcome to our history test, let's see how much you know</p>
              <input class="start-game" type="button" value='start quiz'>
          </div>`;
}


/********Question ********/
function questionPageGenerator() {
  const questionIndex = store.questionNumber;
  
  const questionShort = store.questions[questionIndex];
  
  const questionTotal = store.questions.length ;
  
  return `<div class='box questions'>
            <p>${questionIndex + 1 } out of ${questionTotal}</p>
            <span class="out-of">${store.score} out of ${questionTotal} correct</span><br>
            <h2>${questionShort.question}</h2>
            <img src="${questionShort.image}" alt= "${questionShort.alt}" >
              <form id="questions-form" action="">
                <div class ="${questionShort.answers[0]}">
                  <input type="radio" id="${questionShort.answers[0]}" name="question" value="${questionShort.answers[0]}">
                  <label class ="${questionShort.answers[0]}" for="question-1">${questionShort.answers[0]}</label>
                </div>
                <div class ="${questionShort.answers[1]}">
                  <input type="radio" id="${questionShort.answers[1]}" name="question" value="${questionShort.answers[1]}">
                  <label class ="${questionShort.answers[1]}" for="question-2">${questionShort.answers[1]}</label>
                </div>
                <div class ="${questionShort.answers[2]}">
                  <input type="radio" id="${questionShort.answers[2]}" name="question" value="${questionShort.answers[2]}">
                  <label class ="${questionShort.answers[2]}" for="question-3">${questionShort.answers[2]}</label>
                </div>
                <div class ="${questionShort.answers[3]}">
                  <input type="radio" id="${questionShort.answers[3]}" name="question" value="${questionShort.answers[3]}">
                  <label class ="${questionShort.answers[3]}" for="question-4">${questionShort.answers[3]}</label>
                </div>
                <div>
                <input class="submitA" type="button" value="submit">
                </div>
              </form>
           </div>`;
           

}
/*************response*************/
// set timeout, before html replaced
function responsePageGenerator(reply) {
  let message = '';
  if(reply === 'correct !'){
    message = store.questions[store.questionNumber].correct; 
  }else{
    message =  store.questions[store.questionNumber].incorrect;
  }

  return `<div class="box reply">
       <h2>${reply}</h2>
    <p> Question: ${store.questionNumber} out of ${store.questions.length}</p>
    <p>${store.score} out of ${store.questions.length} correct</p>
    <p>${message}</p>
    <input class="reply" type="button" value='Next Question'>
    </div>`;

}
/**********Finale part ***********/
function outOfReply(){
  return store.score / store.questions.length < .5 ? 'Oof'
    : store.score / store.questions.length < .65 ? 'not too bad'
      : store.score / store.questions.length < .8 ? 'Good job'
        : store.score / store.questions.length < .9 ? 'Great Job!'
          : 'Outstanding ' ;

}

function finalPageGenerator() {
  return `<div class=" box finale">
            <h2>Your Score</h2>
              <span class="out-of">${store.score} out of ${store.questions.length} correct</span><br>
              <span>${outOfReply()}</span><br>
                <input type="button" class="restart-game" value='Try Again?'>
        </div>`;

}



// These functions return HTML templates

/********** !!!!!RENDER FUNCTION!!!!! NOW WITH NO 'S' **********/
const render = (reply) => {
  !store.quizStarted ? $('main').html(startPageGenerator())
    :store.onQuestion ? $('main').html(questionPageGenerator())
      : store.questionNumber === store.questions.length ? $('main').html(finalPageGenerator())
        : $('main').html(responsePageGenerator(reply)) ;
};

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function to start game 


function startQuizFunction() {
  $('main').on('click','input.start-game', () => {
    store.quizStarted = true; 
    store.onQuestion =true ; 
    render();
  });
  
}

function ifCorrect(reply){
  
  reply === store.questions[store.questionNumber].correctAnswer ? correct() : incorrect();
}
//r.i.p. changeButton
//r.i.p highLightRight
//i thought you guy were cool, you will be missed 
//........**start to play taps https://www.youtube.com/watch?v=S-Xrlf3taEo **// 


function questionAnswer() {
  $('main').on('click','.submitA',function(x) {
    x.preventDefault;
    const radioValue = $('input[name="question"]:checked').val();
    if(radioValue){
      store.onQuestion = false ; 
      ifCorrect(radioValue);

    }
  });

}

function questionPartMover() {
  $('main').on('click','.next',function(x) {
    x.preventDefault;
    const radioValue = $('input[name="question"]:checked').val();
    ifCorrect(radioValue);
  });
}


function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
//render response page w/correct
function correct() {
  store.score++;
  render('correct !');
  // questionAnswer()
}

//++ to store.questionNumber
//render response page w/incorrect

function incorrect() {
  render('incorrect');
  
}

//this will handel the next question button
//when next button is pressed
//load question page
function nextQuestion(){
  $('main').on('click','input.reply', () =>{
    questionCounter();
    if(store.questionNumber === store.questions.length){
      render();
    }
    store.onQuestion = true ;
    render();
  });
  //click button for next question
  
}

function restart() {

  $('main').on('click', 'input.restart-game', function(){
    store.quizStarted = false;
    store.onQuestion = true ;
    store.score = 0 ;
    render();
    startQuizFunction();
    return store.questionNumber = 0;
  });
  
}

/******handleFunctionCall******/

function handleFunctionCalls(){
  render();
  startQuizFunction();
  nextQuestion();
  restart();
  questionAnswer();
  questionPartMover();
}

$(handleFunctionCalls);

// These functions handle events (submit, click, etc)