import Questions from './compo/Questions'
import Answere from './compo/Answere'
import {Routes ,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Questions/>}/>
        <Route path="/:id" element={<Answere/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
