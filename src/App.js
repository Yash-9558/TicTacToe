import './App.css';
import React,{useState} from 'react';
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
const App = () => {
  const [board,setboard] = useState(Array(9).fill(null));
  const [xoro,setxorx] = useState('X');
  const [x_win,updatex] = useState(0);
  const [o_win,updateo] = useState(0);
  const [tie,updatetie] = useState(0);
  const win_condition = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

  const resetboard = () =>{
    setboard(Array(9).fill(null));
    setxorx('X');
  }

  const handleBoxClick = (boxIdx) => {
    if(board[boxIdx] === null){
      var old_board = board;
      old_board[boxIdx] = xoro;
      if(xoro === 'X') setxorx('O');
      else setxorx('X');
      setboard(old_board);

      const checkwinner = () => {
        var winner = false;
        for(var i=0;i<win_condition.length;i++){
          if(board[win_condition[i][0]] === board[win_condition[i][1]] && board[win_condition[i][1]] === board[win_condition[i][2]] && board[win_condition[i][2]] !== null){
            winner = true;

            if(board[win_condition[i][0]] === 'X') updatex(x_win+1);
            else updateo(o_win+1);

            break;
          }
        }
        var cnt = 0;
        for(i=0;i<board.length;i++){
          if(board[i] !== null) cnt++;
        }

        if(cnt === 9 && !winner){
          updatetie(tie+1);
          setboard(Array(9).fill(null));
          setxorx('X');
        }
        if(winner){
          setboard(Array(9).fill(null));
          setxorx('X');
        }
      }

      checkwinner();
    }
  };

  return (
      <div className="App">
        <ScoreBoard X={x_win} O={o_win} Tie = {tie} xoro = {xoro}/>
        <Board board={board} onClick={handleBoxClick}/>
        <ResetButton reset = {resetboard}/>
      </div>
  );
}

export default App;