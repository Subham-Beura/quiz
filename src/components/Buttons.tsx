import React from "react";

import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

import changeQuestion from '../clickHandler'

type propsType = {
  questionNo: number,
  setQuestionNo: Function
}

export const Buttons = ({ questionNo, setQuestionNo }: propsType) => {

  let { prev, next } = changeQuestion

  return (
    <div className="btn-container">
      <GrCaretPrevious
        className='btn'
        onClick={() => prev(questionNo, setQuestionNo)}
      />
      <GrCaretNext
        className='btn'
        onClick={() => next(questionNo, setQuestionNo)}
      />
    </div>
  )
}
