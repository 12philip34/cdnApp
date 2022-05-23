import { useState } from 'react';
import './App.css';
import Quiz from './component/Quiz';
import SplashScreen from './component/SplashScreen';
import Apps from './component/Form';
import GameIsOver from './component/Gameover';

 

function App() {

  const [facet, setFacet] = useState('isSplashScreen')

  const setNextFacet = value => setFacet(value)
  
  return (
    <div className="App">
      {facet === 'isSplashScreen' && <SplashScreen nextFacet = {setNextFacet}  />}
      {facet === 'isRegister' && <Apps nextFacet = {setNextFacet} />}
      {facet === 'isQuiz' && <Quiz nextFacet = {setNextFacet} />}
      {facet === 'isGameOver' && <GameIsOver nextFacet = {setNextFacet} />}
    </div>
  );
}

export default App;
