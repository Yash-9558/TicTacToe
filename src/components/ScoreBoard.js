import './ScoreBoard.css';
import React from 'react';

const ScoreBoard = ({X,O,Tie,xoro}) => {
      return (
            <div className="scoreboard">
                  <span className={'x-score'+(xoro === 'O' ? ' inactive':'')}>X - {X}</span>
                  <span className={'o-score'+(xoro === 'X' ? ' inactive':'')}>O - {O}</span>
                  <span className={'tie-score'}>TIE - {Tie}</span>
            </div>
      );
}

export default ScoreBoard;