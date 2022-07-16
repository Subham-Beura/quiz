import React, { useEffect, useState } from 'react';
import './App.css';
import fetchQuestions from "./API";

// Component import
import Card from './components/Card';
// Types 
import { questionType } from './questionType';


function App() {
  // State
  const [questions, setQuestions] = useState<questionType[]>()
  // API call
  useEffect(() => {
    fetchQuestions(setQuestions);
  }, []);
  if(questions)
  return (
    <div className="App">
      Quiz
      <Card  question= {questions![1]}/>
    </div>
  );
  else return(<div>Loading</div>)
}

export default App;
