import React, {useState, useEffect} from 'react';
import {calculateWinner} from '../../../utils';
import {Board, Info} from '../../Organism/index';
import './index.css';

function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
    location: []
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState(`Next player: ${xIsNext ? 'X' : 'O'}`);
  
  useEffect(() => {
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    if(winner) {
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [history, stepNumber, xIsNext]);

  

  return (
    <div className="game">
      <Board
        history={history}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
        setters={[setHistory, setStepNumber, setXIsNext]}
      />
      <Info
        status={status}
        history={history}
        setters={[setStepNumber, setXIsNext]}
      />
    </div>
  )
}

export default Game;