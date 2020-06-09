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






function startPageGenerator(){
  return `<div class="box start">
            <h2>start quiz</h2>
            <p>Hello welcome to our history test, let's see how much you know</p>
              <input class="start-game" type="button" value='start quiz'>
          </div>`;
}


/********Question ********/
function questionPageGenerator() {
  let questionIndex = store.questionNumber;
  
  let questionShort = store.questions[questionIndex];
  
  let questionTotal = store.questions.length ;
  
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
  return `<div class="box reply">
       <h2>${reply}</h2>
    <p><span> Question: ${store.questionNumber + 1} out of ${store.questions.length}</span></p>
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

/********** RENDER FUNCTION(S) **********/

function renderStart( ) {
  $('main').html(startPageGenerator());
}

function renderQuestion( ) {
  $('main').html(questionPageGenerator());}

function renderResponse(reply) {
  $('main').html(responsePageGenerator(reply));
}
 
function renderFinal( ) {
  if(store.questionNumber + 1 === store.questions.length ){
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
  reply === store.questions[store.questionNumber].correctAnswer ? correct() : incorrect();
}

const changeButton = (a) =>{
  if(a === store.questions[store.questionNumber].correctAnswer ){
    $('input.submitA').attr('value', 'Continue');
    $('input.submitA').attr('class', 'next');
  }else{
    $('input.submitA').attr('value', 'Continue');
    $('input.submitA').attr('class', 'next');
  }
  
  
};

const highLightRight = (a) => {
  let j;
  for(let i= 0 ; i < store.questions[store.questionNumber].answers.length ; i++){
    if(store.questions[store.questionNumber].correctAnswer === store.questions[store.questionNumber].answers[i]){
      j = i ;
    } 
  }
  let firstWordOf = store.questions[store.questionNumber].answers[j];
  let word = firstWordOf.split(' ');
  if(a === store.questions[store.questionNumber].correctAnswer){
    $(`label.${word[0]}`).css('background-color' , '#33FF66');
    store.score++;
  }else{
    $(`label.${word[0]}`).css('background-color' , '#FF0066');
  }

 
    
};


function questionAnswer() {
  $('main').on('click','.submitA',function(x) {
    x.preventDefault;
    let radioValue = $('input[name="question"]:checked').val();
    if(radioValue){
      highLightRight(radioValue);
      changeButton(radioValue);
    }
    console.log(store.quizStarted);
  });

}

function questionPartMover() {
  $('main').on('click','.next',function(x) {
    x.preventDefault;
    let radioValue = $('input[name="question"]:checked').val();
    ifCorrect(radioValue);
  });
}


function questionCounter(){
  return store.questionNumber++;
}

//++ to store.questionNumber
//render response page w/correct
function correct() {
  renderResponse('correct !');
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
  questionPartMover();
}

$(handleFunctionCalls);

// These functions handle events (submit, click, etc)