import React from 'react'


import { Options } from './Options'
import { Buttons } from './Buttons';
import { questionType } from '../questionType'

import utils from '../util'


type propsType = {
  question: questionType,
  questionNo: number,
  setQuestionNo: Function
}

export default function Card({ question, questionNo, setQuestionNo }: propsType) {

  const { question: question_text, correct_answer, incorrect_answers } = question

  let allOptions = utils.shuffleArray([...incorrect_answers, correct_answer])

  return (
    <div className='card'>

      <h3>
        Question {questionNo + 1}/{utils.MAX_QUESTIONS}
      </h3>

      <p>{question_text}</p>

      <Options allOptions={allOptions} />

      <Buttons questionNo={questionNo} setQuestionNo={setQuestionNo} />
    </div>
  )
}
