/* eslint-disable no-undef */
/**
 * Example store structure
 */
'use strict';

const log = console.log;


const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'When did Shakespeare write Romeo and Juliet',
      answers: [
        '1580',
        '1784',
        '1595',
        '1802'
      ],
      correctAnswer : '1595'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
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


const questionIndex = store.questionNumber;


function startPageGenerator(){
  return `<div class="box start">
            <h2>start quiz</h2>
            <p>bla bla bla basic intro of what the user will be getting into</p>
              <input class="start-game" type="button" value='start quiz'>
          </div>`;
}

const questionShort = store.questions[questionIndex];

const questionTotal = store.questions.length ;

function questionPageGenerator() {
  return `<div class="box questions">
            <h2>${questionShort.question}</h2>        
              <span class="Q0">${questionShort.answers[0]}</span>        
                <input type="button" value='Q1'><br>
              <span class="Q0">${questionShort.answers[1]}</span>        
                <input type="button" value='Q2'><br>
              <span class="Q0">${questionShort.answers[2]}</span>        
                <input type="button" value='Q3'><br>
              <span class="Q0">${questionShort.answers[3]}</span>        
                <input type="button" value='Q4'>
</div>`;

}

function responsePageGenerator(reply) {
  return `<div class="box reply">
       <h2>${reply}</h2>
    <p><span> Question: ${questionIndex} out of ${questionTotal}</span></p>
    <input type="button" value='Next Question'>Next Question
    </div>`;

}

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
  log('renderStart is working');
  $('.js-box-placement').html(startPageGenerator());
  store.quizStarted = false;
}

function renderQuestion( ) {
  log('generalRenderFunction is working');
  $('.js-box-placement').html(questionPageGenerator());
}

function renderResponse(reply) {
  log('renderResponse is working ');
  $('.js-box-placement').html(responsePageGenerator(reply));
}
 
function renderFinal( ) {
  log('renderFinal is working ');
  $('.js-box-placement').html(finalPageGenerator());
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function to start game 
function startQuizFunction() {
  $('div.js-box-placement').on('submit','input.start-game', x => {
    x.preventDefault();
    alert('yuata!!');
  });
  
}

function questionAnswer() {


}

function ifCorrect(){
  $('button[type=Q0]').val() === questionShort.correctAnswer ? correct() : incorrect();
}

function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
//render response page w/correct
function correct( ) {
  renderResponse('correct !');

  store.score++;
  questionCounter();
}

//++ to store.questionNumber
//render response page w/incorrect
function incorrect() {
  renderResponse('incorrect');

  questionCounter();
}

//this will handel the next question button
//when next button is pressed
//load question page
function nextQuestion(){

}

function restart() {
  //if restate button is press, todo
  // [load start & reset score to 0]done
  // [let store.quizStarted = false]done
  store.questionNumber = 0;
  renderStart();
}

/******handleFunctionCall******/

function handleFunctionCalls(){
  renderStart();
  startQuizFunction();
}

$(handleFunctionCalls);

// These functions handle events (submit, click, etc)