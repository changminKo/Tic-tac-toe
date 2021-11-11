import React from 'react';
import './index.css';

function Button(props) {
  const {className='square', onClick, children} = props;
  return (
    <button
      className={className}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
