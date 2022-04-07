import React ,{useContext}from 'react';
import {QuestionsContext} from '../context/questions'
import {useParams} from 'react-router-dom'
const Answere = () => {
    const  {id} = useParams() 
    const questions  = useContext(QuestionsContext)
    const finder = questions.find( question => question.id === id)
    const {imageAnswere , answere} = finder
    console.log(finder , 'finder')
  return (
    <div className="question ans">
     
     <div className="imageContainer">
     <img className="imageA" src={imageAnswere} alt=""/>
     </div>
     <p className="des">{answere}</p>
       
    </div>
  );
}

export default Answere;
