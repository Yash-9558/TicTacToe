import './ResetButton.css';
import React from 'react';

const ResetButton = ({reset}) => {
      return (
            <button className='reset-btn' onClick={reset}>Reset</button>
      );
}

export default ResetButton;