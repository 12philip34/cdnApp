import '../CSS/Quiz.css';
import '../App.css';
import { useState, useEffect, Fragment } from 'react';
import './Form';
import thumbsup from '../images/thumbsup.png';
import thumbsDown from '../images/thumbsDown.png';
import './Gameover';

// Function for array of Questions and answers!!!!!
const quiz =[
    
  {
    question: 'What is Escape velocity',
    answer: 'Velocity needed to leave gravity influence',
    options: ['flash point', 'Velocity needed to leave gravity influence', 'velocity on escape points', 'velocity due to lost']
  },
  {
    question: 'When did Nigeria get her independent',
    answer: '1960',
    options: ['1960', '1963', '1964', '1965']
  },{
    question: 'How many color do the Nigerian flag has?',
    answer: 'Two',
    options: ['Ten', 'Eight', 'Forty-Three', 'Two']
  },{
    question: 'How many moon does the Earth has',
    answer: 'One',
    options: ['One', 'Seven', 'Two', 'State']
  }
];

let answerPoints = 0;
const Quiz = (nextFacet) => {
  localStorage.setItem('gamePoint', 0);
 const [questionCount, setQuestionCount] = useState(0)
 const [counter, setCounter] = useState(60) // in seconds
 const [selectedAnswer, setSelectedAnswer] = useState('');
  //  Container responsible to call the next Question
  useEffect(() => {
    const gameIsOver = document.getElementById('gameOver');
    const qCount = quiz[questionCount];
  if(counter === 0 && qCount === quiz.length){
        gameIsOver.style.display = 'block';
    localStorage.setItem('gamePoint', answerPoints);
    const displayName = document.getElementById('name');
    const displayPoints = document.getElementById('points');
    if(Number(localStorage.getItem('gamePoint')) > 1) {
      displayPoints.innerText = localStorage.getItem('gamePoint') + ' points';
    }
    else {
      displayPoints.innerText = localStorage.getItem('gamePoint') + ' point';
    }

    displayName.innerText = localStorage.getItem('gamerName');

        }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, questionCount])



  // fifty-fifty function
  const fiftyFifty = () => {
  const currentQuestion =  quiz[questionCount]
  let toBeHidden = []

  let options = document.querySelectorAll('.Opt')

  options.forEach(option => {
    if (option.value !== currentQuestion) {
      toBeHidden.push(option)
    }

  })
  const shuffled = toBeHidden.sort(() => 0.5 - Math.random());

  let selected = shuffled.slice(0, 2);
  selected.forEach(item => {
    item.classList.add('disable-el')
  })
}

  const CallFriend = () =>{
    const num = localStorage.getItem('gamerNumber');
    const el = document.querySelector('#contact').href = `tel:${num}`
    if (num) {
      // const el = document.querySelector('#contact').href = `tel:${num}`
      el();
    }
  }
   

   const openButton = (event) => {
     
    setSelectedAnswer(event.target.innerText)
     const mainModal = document.getElementById('modalcontainer');
     const modalText = document.getElementById('textModal')
      mainModal.style.display = 'block';
      modalText.innerText = `Is this your final answer!!?`;

      
   }
   const closeButton = () => {
    const mainModal = document.getElementById('modalcontainer');
    mainModal.style.display = 'none';
  }  
      const correctAnswer = () => {
        let currentQuestion = quiz[questionCount];
         const decision = document.getElementById('verdict')
         const mainDecision = document.getElementById('decisionModal')
         const mainModal = document.getElementById('modalcontainer');
         const thumbsIsUp = document.getElementById('thumbsUp');
         const thumbsIsDown = document.getElementById('thumbsDown');
         const options = document.querySelectorAll('.Opt')

        //  console.log(selectedAnswer)
         if(selectedAnswer === currentQuestion.answer) {
           mainModal.style.display = 'none';
           mainDecision.style.display = 'block';
           decision.innerText += `correct Answer`;
           thumbsIsUp.style.display = 'block';
           answerPoints++;
         }
           else {
            mainModal.style.display = 'none';
            mainDecision.style.display = 'block';
            decision.innerText += `Wrong Answer`;
            thumbsIsDown.style.display = 'block';   
         }
         options.forEach(option => {
          option.classList.remove('disable-el')
        })   
         setQuestionCount(questionCount + 1);
         setTimeout(() => {
           thumbsIsUp.style.display = 'none';
           mainDecision.style.display = 'none';
           thumbsIsDown.style.display = 'none';
           decision.innerText = '';
         }, 1000); 
      }

    const gameIsOver = document.getElementById('gameOver');
      const walkAway = () =>{
        gameIsOver.style.display = 'block';
        if(counter === 0){
          gameIsOver.style.display = 'block';
      localStorage.setItem('gamePoint', answerPoints);
      const displayName = document.getElementById('name');
      const displayPoints = document.getElementById('points');
      if(Number(localStorage.getItem('gamePoint')) > 1) {
        displayPoints.innerText = localStorage.getItem('gamePoint') + ' points';
      }
      else {
        displayPoints.innerText = localStorage.getItem('gamePoint') + ' point';
      }
          displayName.innerText = localStorage.getItem('gamerName');  
        }

      }

      const disableQuiz = () => {
        const timeOff = document.getElementById('Timer');
          timeOff.style.display = 'none';
          
      }

  return(
   
    
     <div style={{background:'#2B3E86',height:'auto',padding:'4rem'}}>
        <div className='countDown' id='Timer'>
          Countdown: {counter}
        </div>
        <div>
          {/* <div className='button' onClick={openButton}>Open</div> */}
          
        </div>
        <div className='classQuestion'>
            { quiz[questionCount].question}
        </div>

        {/* quiz answers */}
      <div className='QAnswer'>
         {quiz[questionCount].options.map((option, i) =>(
           <h1 id={i} key={i} className='Opt' onClick={openButton}>{option}</h1>
         ))}
      </div>
      {/* <button onClick={next}>Next Question</button> */}
      <button className='LiveLines' onClick={fiftyFifty}>FiftyX2</button>
        <a href='{num}' className='LiveLines callBtn' id='contact' onClick={CallFriend}>
          CallaFriend
        </a>
      <button className='LiveLines' onClick={disableQuiz}>Ask Audience</button>
      <button className='LiveLines' onClick={walkAway}>Walk Away</button>
      {/* ///////////////////////// */}
          <Fragment>
          <div id='modalcontainer'>
        <div id='modal'>
         <h1 id='textModal'>
           {/* text goes in here */}
         </h1>
          <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
          <div className='button' onClick={closeButton}>No</div>
          <div className='button' onClick={correctAnswer}>Yes</div>
          </div>
        </div>
      </div> 
      <div id="decisionModal">
        <div id="verdict">
            {/* Decision Modal */}
             
        </div>
            <img id='thumbsUp' src={thumbsup} alt='thumbsUp' />
            <img id='thumbsDown' src={thumbsDown} alt='thumbsDown' />
      </div>
    <div id="gameOver">
      <h1>GAME OVER!!!</h1>
        <h2>Congratulations <span id="name"></span>, you won <span id="points"></span></h2>
    </div>

          </Fragment>

       </div>
  )
}
// {Goodbye are just hellos, Carried amongst the wind until our path meets again..}
export default Quiz;


