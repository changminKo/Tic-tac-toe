import React from 'react';
import {Button} from '../../Atom'

function MovesList(props) {
  const {move, desc, setStepNumber, setXIsNext} = props;
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  return (
    <li>
      <Button className='' onClick={() => jumpTo(move)}>{desc}</Button>
    </li>
  );
}

export default MovesList;
