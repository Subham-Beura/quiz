import React from 'react'
import { questionType } from '../questionType'
import Options from './Options'

import { GrCaretNext, GrCaretPrevious } from "react-icons/gr"

type propsType = {
  question: questionType
}
export default function Card({ question }: propsType) {
  console.log(question)
  const { question: question_text, correct_answer, incorrect_answers } = question
  let allOptions = [...incorrect_answers, correct_answer]
  return (
    <div className='card'>
      <h3>Question 1/10</h3>
      <p>{question_text}</p>
      <Options allOptions={allOptions} />
      <div className="btn-container">
        <GrCaretPrevious className='btn'/>
        <GrCaretNext className='btn'/>

      </div>
    </div>
  )
}
