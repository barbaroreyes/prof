
const Question = (props) => {
  
  return (
    <div className="question">
       
      <h3>{props.description}</h3>
      <div>
      <img  className="image" src ={props.image} alt ='' />
      
      </div>
     
    </div>
  );
}

export default Question;
