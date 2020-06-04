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
    },
    {

    },
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
              <button class="start-game" type="button">start quiz</button>
          </div>`;
}

const questionShort = store.questions[questionIndex];

function questionPageGenerator() {
  return `<div class="box questions">
            <h2>${questionShort.question}</h2>        
              <span class="Q0">${questionShort.answers[0]}</span>        
                <button type="Q0">A</button><br>
              <span class="Q0">${questionShort.answers[1]}</span>        
                <button type="Q0">B</button><br>
              <span class="Q0">${questionShort.answers[2]}</span>        
                <button type="Q0">C</button><br>
              <span class="Q0">${questionShort.answers[3]}</span>        
                <button type="Q0">D</button>
</div>`;

}

function responsePageGenerator(storeage) {
  return `<div class="box reply">
       <h2>${reply}$</h2>
    <p><span> Question: ${q1} out of ${q.length}</span></p>
    </div>`;

}

function finalPageGenerator(storeage) {
  return `<div class=" box finale">
            <h2>Your Score</h2>
              <span class="out-of">${'numRight'} out of ${'numWrong'} correct</span><br>
              <span>${'score message reply'}</span><br>
                <button class="restart-game" type="button">Try Again?</button>
        </div>`;

}

function outOfReply(){


}

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

function renderStart( ) {
  log('renderStart is working');
  $('.js-box-placement').html(startPageGenerator());
}

function generalRenderFunction( ) {
log('generalRenderFunction is working');
  $('.js-box-placement').html(questionPageGenerator());
}

function renderResponse( ) {
log('renderResponse is working ');
  $('.js-box-placement').html(responsePageGenerator());
}
 
function renderFinal( ) {
  log('renderFinal is working ');
  $('.js-box-placement').html(finalPageGenerator());
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/
function startQuizFunction() {
 $('button.start-game');
  
}

function questionAnswer() {

}

function ifCorrect(){
  return $('button[type=Q0]').val() === questionShort.correctAnswer;
}

function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
function correct( ) {

  questionCounter();
}
//++ to store.questionNumber
function incorrect() {

  questionCounter();
}

function restart() {

  store.questionNumber = 0;
}

/******handleFunctionCall******/

function handleFunctionCalls(){
  renderStart();
  generalRenderFunction();
}

$(handleFunctionCalls);

// These functions handle events (submit, click, etc)