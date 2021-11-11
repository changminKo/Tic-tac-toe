import React from 'react';
import {Square} from '../../MoleCule';
import './index.css';

function Board(props) {
  const {history, stepNumber, xIsNext, setters: [setHistory, setStepNumber, setXIsNext]} = props;
  const squares = history[stepNumber].squares;

  function renderSquare(x, index) {
    return (
      <Square
        value={squares[index]}
        location={{x, index}}
        history={history}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
        setters={[setHistory, setStepNumber, setXIsNext]}
        key={index}
      />
    );
  }

  function renderBoardRow() {
    const renderResult = [];
    
    for(let i = 0; i < 3; i++) {
      const squares = [];
      for(let j = i * 3; j < (i + 1) * 3; j++) {
        squares.push(renderSquare(i, j));
      }
      renderResult.push(
        <div className="board-row" key={i}>
          {squares}
        </div>
      );
    }

    return renderResult;
  }

  return (
    <div className="game-board">
      {renderBoardRow()}
    </div>
  )
}

export default Board;
