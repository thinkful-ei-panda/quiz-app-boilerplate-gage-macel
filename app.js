/**
 * Example store structure
 */
'use strict';

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

const startPointGenerator = () => {


};

const questionPageGenerator = (storeage) => {


};

const responsePageGenerator = (storeage) => {


};

const finalPageGenerator = (storeage) => {


};

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

const renderStart = ( ) => {

};

const generalRenderFunction = ( ) => {


};

const renderResponse = ( ) => {


};
 
const renderFinal = ( ) => {


};

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/
const startQuizFunction= () =>{


};

const questionAnswer = () => {

};

const correct = ( ) => {


};

const incorrect =()=> {

};

const restart = () => {


};



// These functions handle events (submit, click, etc)