function play(){
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}

function continueGame(){
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);

}

function handleKeyBoardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);
  if(playerPressed === 'Escape'){
    gameOver();
  }

  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);


  if(playerPressed === expectedAlphabet){

      const currentScore = getTextElementValueById('current-score');
      const updatedScore = currentScore + 1;
      setTextElementValueById('current-score', updatedScore);
      removeBackgroundColorById(expectedAlphabet);
      continueGame();
  } else{

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    
    setTextElementValueById('current-life', updatedLife);
    if(updatedLife === 0){
     gameOver();
    }
  }

}

 document.addEventListener('keyup', handleKeyBoardKeyUpEvent);