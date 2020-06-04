'use strict';

const store = {
  
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
    }
  ],
  quizStarted: false,
  // questions.length
  questionNumber: 0,
  // increment score when correct answer
  score: 0
};

// const getQuestion = () => store.questions[i].answers;

// const startPointGenerator = () => {

// };
function handleStartButton ()  {
  $('.start-form').submit( function (event){
    event.preventDefault();
    console.log('this is working properly')
  })
}

const startPage = 
`<div class="box start">
<h2>Start Quiz!</h2>
<p>Let's begin! Press button below</p>
<form class="start-form">
<button class="start-game" type="submit">start quiz</button>
</form>
</div>
`

// const questionsPage = `<div class='box test'>
// <h2>question</h2>
// <span> 'x' out of 'y'</span>
// <form action="answering question">
//   <input type="radio" id="question-1" name="question" value="">
//   <label for="question-1">${question1}</label><br>
//   <input type="radio" id="question-2" name="question" value="female">
//   <label for="question-2">${question2}</label><br>
//   <input type="radio" id="question-3" name="question" value="other">
//   <label for="question-3">${question3}</label>
//   <input type="radio" id="question-4" name="question" value="other">
//   <label for="question-4">${question4}</label>
// </form>
// </div>`

// const responsePage = `<div class="box start"
// <!-- displays: "correct/wrong", -->
// <h2>${correct}$/{incorrect}</h2>
// <p><span>Question: ${q1/q2}</span></p>
// </div>`

// const finalePage =`<div class=" box finale">
// <h2>Your Score</h2>
// <p>${numRight}/${numWrong}</p>
// <button class="restart-game" type="button">Try Again?</button>
// </div>`

const renderPage = () => {
// render start page
   $('main').html(startPage)
// render questions
  //  $('main').html(questionsPage)
// render response
  //  $('main').html(responsePage)
// render finale
  //  $('main').html(finalePage)
}

const handleQuiz = () => {
  handleStartButton()
  renderPage()
}

$(handleQuiz)


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

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)