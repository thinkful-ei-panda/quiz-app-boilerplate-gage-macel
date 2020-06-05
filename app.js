/* eslint-disable no-undef */
/**
 * Example store structure
 */
'use strict';

const log = console.log;


const store = {
  
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'green',
        'orange',
        'pink',
        'red'
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



function startPageGenerator(){
  return `<div class="box start">
            <h2>start quiz</h2>
            <p>bla bla bla basic intro of what the user will be getting into</p>
              <input class="start-game" type="button" value='start quiz'>
          </div>`;
}

let questionIndex 

let questionShort 

let questionTotal 
/********Question ********/
function questionPageGenerator() {
   questionIndex = store.questionNumber;

 questionShort = store.questions[questionIndex];

 questionTotal = store.questions.length ;

  return `<div class='box questions'>
            <h2>${questionShort.question}</h2>
            <span>${questionIndex} out of ${questionTotal}</span>
              <form id="questions-form" action="">
                <div class ="${questionShort.answers[0]}">
                  <input type="radio" id="${questionShort.answers[0]}" name="question" value="${questionShort.answers[0]}">
                  <label for="question-1">${questionShort.answers[0]}</label>
                </div>
                <div class ="${questionShort.answers[1]}">
                  <input type="radio" id="${questionShort.answers[1]}" name="question" value="${questionShort.answers[1]}">
                  <label for="question-2">${questionShort.answers[1]}</label>
                </div>
                <div class ="${questionShort.answers[2]}">
                  <input type="radio" id="${questionShort.answers[2]}" name="question" value="${questionShort.answers[2]}">
                  <label for="question-3">${questionShort.answers[2]}</label>
                </div>
                <div class ="${questionShort.answers[3]}">
                  <input type="radio" id="${questionShort.answers[3]}" name="question" value="${questionShort.answers[3]}">
                  <label for="question-4">${questionShort.answers[3]}</label>
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
    <p><span> Question: ${questionIndex} out of ${questionTotal}</span></p>
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
  log('renderStart is working');
  $('main').html(startPageGenerator());
  store.quizStarted = false;
}

function renderQuestion( ) {
  log('generalRenderFunction is working');
  $('main').html(questionPageGenerator());
  log(questionIndex)
}

function renderResponse(reply) {
  log('renderResponse is working ');
  $('main').html(responsePageGenerator(reply));
}
 
function renderFinal( ) {
  log('renderFinal is working ');
  $('main').html(finalPageGenerator());
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function to start game 
function startQuizFunction() {
  $('main').on('click','input.start-game', () => {
    log('yay!');
    store.quizStarted = true; 
    renderQuestion();
    questionAnswer();
  });
  
}

function ifCorrect(reply){
  questionCounter();
  reply === questionShort.correctAnswer ? correct() : incorrect();
  
}

const changeButton = () =>{
  $('input.submitA').attr('value', 'next-question');
  $('input.submitA').attr('class','next');
};

const highLightRight = () => {
  let j;
  for(let i= 0 ; i < questionShort.answers.length ; i++){
    log('highlight is working');
    log( questionShort.answers[i]);
    log( questionShort.correctAnswer);

    if(questionShort.correctAnswer === questionShort.answers[i]){
      j = i ;
    } 
  }
  log($(`div.${questionShort.answers[j]}`));
  $(`div.${questionShort.answers[j]}`).css('background-color' , 'yellow');
    
};

let check = true;
function questionAnswer() {
  $('main').on('click','.submitA',function(x) {
    x.preventDefault;
    let radioValue = $('input[name="question"]:checked').val();
    log(radioValue);
    changeButton();
    highLightRight();
    
    
    log(store.questionNumber)
    setTimeout(function(){ifCorrect(radioValue) }, 3000);
      // ifCorrect(radioValue);
    //   startQuestion()
    log(store.questionNumber)


    
  });

}


function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
//render response page w/correct
function correct() {
  renderResponse('correct !');
  log(store.questionNumber)
  nextQuestion();
  store.score++;
  
  // questionAnswer()
}

//++ to store.questionNumber
//render response page w/incorrect

function incorrect() {
  renderResponse('incorrect');
  nextQuestion();
  
}

//this will handel the next question button
//when next button is pressed
//load question page
function nextQuestion(){
  $('main').on('click','input.reply', () =>{
    log('this is working')
    renderQuestion();
    questionAnswer();
  });
  //click button for next question
  
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

handleFunctionCalls();

// These functions handle events (submit, click, etc)


// commit, push 