import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {QuestionsContext} from '../context/questions';
import Question from '../compo/Question' ;
const Questions = () => {
    const questions = useContext(QuestionsContext)
    console.log(questions,'questions')
  return (
    <div className="questions">
      <h1 className="name">Questions</h1>
      {questions.map((item , i)=>{
        return (
            <Link to ={`/${item.id}`}><Question {...item}/></Link>
        )
              
          
      })}
    </div> 
  );
}

export default Questions;
