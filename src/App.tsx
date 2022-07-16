import React, { useEffect, useState } from 'react';
import './App.css';
import fetchQuestions from "./API";

// Component import
import Card from './components/Card';
// Types 
import { questionType } from './questionType';


function App() {
  // State
  const [question, setQuestion] = useState<questionType>()
  // API call
  useEffect(() => {
    fetchQuestions(setQuestion);
  }, []);
  return (
    <div className="App">
      Quiz
      <Card/>
    </div>
  );
}

export default App;
