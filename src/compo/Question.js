// import React ,{useContext}from 'react';

const Question = (props) => {
    console.log(props.answere)
  return (
    <div className="question ">
       
      <h3>{props.description}</h3>
      <div>
      <img  className="image" src ={props.image} alt ='' />
      </div>
      
    </div>
  );
}

export default Question;
