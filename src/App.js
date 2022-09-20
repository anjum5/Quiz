import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

   const [currentQue,setCurrentQue]=useState(0);
   const[showScore,setShowscore]=useState(false);
   const[score,setScore]=useState(0)

   const handleAnsButtonClick=(isCorrect)=>{
    if(isCorrect===true){
      setScore(score+1)
    }

    const nextquestion=currentQue+1;
    if(nextquestion<questions.length)
    setCurrentQue(nextquestion)
    else{
      setShowscore(true)
    }
   }
	return (
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQue +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQue].questionText}</div>
					</div>
					<div className='answer-section'>
					{questions[currentQue].answerOptions.map((answerOptions)=><button onClick={()=>{handleAnsButtonClick(answerOptions.isCorrect)}}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}