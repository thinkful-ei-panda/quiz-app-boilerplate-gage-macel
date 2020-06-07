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
      alt : 'Road'
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
      alt : 'helmet'
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
      alt : 'trade'
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
      alt : 'building'
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
      alt : 'shipping-create'
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
      alt : 'space'
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
      alt : 'bike'
    },
  ],
  quizStarted: false,
  // questions.length
  questionNumber: 0,
  // increment score when correct answer
  score: 0
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

let questionIndex;

let questionShort; 

let questionTotal;

function startPageGenerator(){
  return `<div class="box start">
            <h2>start quiz</h2>
            <p>Hello welcome to our history test, let's see how much you know</p>
              <input class="start-game" type="button" value='start quiz'>
          </div>`;
}


/********Question ********/
function questionPageGenerator() {
  questionIndex = store.questionNumber;
  
  questionShort = store.questions[questionIndex];
  
  questionTotal = store.questions.length ;
  
  return `<div class='box questions'>
            <span>${questionIndex + 1 } out of ${questionTotal}</span>
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
  return `<div class="box reply">
       <h2>${reply}</h2>
    <p><span> Question: ${questionIndex + 1} out of ${questionTotal}</span></p>
    <input class="reply" type="button" value='Next Question'>
    </div>`;

}
/**********Finale part ***********/
function outOfReply(){
  return store.score / questionTotal < .5 ? 'Oof'
    : store.score / questionTotal < .65 ? 'not too bad'
      : store.score / questionTotal < .8 ? 'Good job'
        : store.score / questionTotal < .9 ? 'Great Job!'
          : 'Outstanding ' ;

}

function finalPageGenerator() {
  return `<div class=" box finale">
            <h2>Your Score</h2>
              <span class="out-of">${store.score} out of ${questionTotal} correct</span><br>
              <span>${outOfReply()}</span><br>
                <input type="button" class="restart-game" value='Try Again?'>
        </div>`;

}



// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

function renderStart( ) {
  $('main').html(startPageGenerator());
  store.quizStarted = false;
}

function renderQuestion( ) {
  $('main').html(questionPageGenerator());}

function renderResponse(reply) {
  $('main').html(responsePageGenerator(reply));
}
 
function renderFinal( ) {
  if(questionIndex + 1 === store.questions.length ){
    $('main').html(finalPageGenerator());
  }
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function to start game 
function startQuizFunction() {
  $('main').on('click','input.start-game', () => {
    store.quizStarted = true; 
    renderQuestion();
  });
  
}

function ifCorrect(reply){
  questionCounter();
  reply === questionShort.correctAnswer ? correct() : incorrect();
}

const changeButton = (a) =>{
  if(a === questionShort.correctAnswer ){
    $('input.submitA').attr('value', 'nice');
    $('input.submitA').attr('class', 'next');
  }else{
    $('input.submitA').attr('value', 'the correct answer is');
    $('input.submitA').attr('class', 'next');
  }
  
  
};

const highLightRight = (a) => {
  let j;
  for(let i= 0 ; i < questionShort.answers.length ; i++){
    if(questionShort.correctAnswer === questionShort.answers[i]){
      j = i ;
    } 
  }
  let firstWordOf = questionShort.answers[j];
  let word = firstWordOf.split(' ');
  if(a === questionShort.correctAnswer){
    $(`label.${word[0]}`).css('background-color' , '#33FF66');
  }else{
    $(`label.${word[0]}`).css('background-color' , '#FF0066');
  }

 
    
};


function questionAnswer() {
  $('main').on('click','.submitA',function(x) {
    x.preventDefault;
    let radioValue = $('input[name="question"]:checked').val();
    highLightRight(radioValue);
    changeButton(radioValue);
    setTimeout(function(){ifCorrect(radioValue); }, 3000);
  });

}


function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
//render response page w/correct
function correct() {
  renderResponse('correct !');
  store.score++;
  renderFinal();
  // questionAnswer()
}

//++ to store.questionNumber
//render response page w/incorrect

function incorrect() {
  renderResponse('incorrect');
  renderFinal();
}

//this will handel the next question button
//when next button is pressed
//load question page
function nextQuestion(){
  $('main').on('click','input.reply', () =>{

    renderQuestion();
  });
  //click button for next question
  
}

function restart() {

  $('main').on('click', 'input.restart-game', function(){
    store.quizStarted = false;
    store.score = 0 ;
    renderStart();
    startQuizFunction();
    return store.questionNumber = 0;
  });
  
}

/******handleFunctionCall******/

function handleFunctionCalls(){
  renderStart();
  startQuizFunction();
  nextQuestion();
  restart();
  questionAnswer();
}

$(handleFunctionCalls);

// These functions handle events (submit, click, etc)