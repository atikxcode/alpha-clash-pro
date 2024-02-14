function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}

function continueGame(){
  const alphabet = getARandomAlphabet();
  console.log('Your random alphabet', alphabet);
}