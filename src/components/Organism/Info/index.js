import React from 'react';
import {MovesList} from '../../MoleCule';
import './index.css';

function Info(props) {
  const {status, history, setters: [setStepNumber, setXIsNext]} = props;
  const moves = history.map((step, move) => {
    const {location: [x, y]} = step;

    const desc = move ?
      `Go to Move #${move} (${x}, ${y})` :
      'Go to Game Start';

    return (
      <MovesList
        move={move}
        desc={desc}
        setStepNumber={setStepNumber}
        setXIsNext={setXIsNext}
        key={move}
      />
    )
  });

  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  );
}

export default Info;
