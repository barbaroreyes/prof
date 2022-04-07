import React ,{createContext ,useState} from 'react';
import {data} from '../data'
 const  QuestionsContext = createContext()
const QuestionsProvider = ({children}) => {
 const [questions,setQuestions ]= useState(data)
          
  return (
    <div>
      <QuestionsContext.Provider value ={questions }>
           {children}
      </QuestionsContext.Provider>
    </div>
  );
}

export{QuestionsProvider,QuestionsContext} 
