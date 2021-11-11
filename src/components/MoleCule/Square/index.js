import React, {useEffect, useState} from 'react';
import {Button} from '../../Atom';
import {calculateWinner} from '../../../utils';

function Square(props) {
  const {value, location, history, stepNumber, xIsNext, setters: [setHistory, setStepNumber, setXIsNext]} = props;
  const [isBtnActive, setIsBtnActive] = useState(false);
  
  useEffect(() => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const currentLocation = current.location;
    const currentIndex = ((currentLocation[0] * 3) + currentLocation[1]);
    
    if(currentIndex === location.index) {
      setIsBtnActive(true);
    } else {
      setIsBtnActive(false);
    }
  },[history, stepNumber, location]);
  
  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const currentSquares = current.squares.slice();
    
    if(calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(currentHistory.concat([{
      squares: currentSquares,
      location: [location.x, location.index % 3]
    }]))
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  }

  return (
    <Button
      className={isBtnActive ? 'square active' : 'square'}
      onClick={() => handleClick(location.index)}
    >
      {value}
    </Button>
  );
}

export default Square;
