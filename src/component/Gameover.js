import '../CSS/Quiz.css';
import '../App.css'

const GameIsOver = () => {


  const displayName = document.getElementById('name');
  const displayPoints = document.getElementById('points');
  
  if(Number(localStorage.getItem('gamePoint')) > 1) {
    displayPoints.innerText = sessionStorage.getItem('gamePoint') + ' points';
  }
  else {
    displayPoints.innerText = sessionStorage.getItem('gamePoint') + ' point';
  }
  
  displayName.innerText = sessionStorage.getItem('gamerName');



  return(
    <div className='GameOverContainer'>
      <h2>Congratulations <span id="name"></span>, you won <span id="points"></span></h2>
    </div>
  )
}
export default GameIsOver;