import utils from "./util"
const next=(questionNo:any,setQuestionNo:Function)=>{
    if(questionNo<utils.MAX_QUESTIONS-1)    setQuestionNo(questionNo+1)
}
const prev=(questionNo:any,setQuestionNo:Function)=>{
    if(questionNo>0)    setQuestionNo(questionNo-1)
}
const changeQuestion = { next, prev }
export default changeQuestion
