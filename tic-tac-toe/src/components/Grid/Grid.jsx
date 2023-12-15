import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../../helpers/checkWinner";
function Grid({numberOfCards}){
       const [board,setBoard] = useState(Array(numberOfCards).fill(""));
       const [trun,setTurn] = useState(true);//true=> O,false => x
       const [winner,setWinner]=useState(null);

       function play(index){
              if( trun==true){
                     board[index]="O";
              }else{
                     board[index]="X";
              }
              const win=isWinner(board,trun ? "O":"X");
              if(win){
                     setWinner(win);

              }
              setBoard([...board]);
              setTurn(!trun);

       }
       function reset(){
          setTurn(!trun);
          setWinner(null);
          setBoard(Array(numberOfCards).fill(""))
       }

       return(
        <div className="grid-wrapper">
        {
              winner &&(
                     <>
                     <h1 className="turn-highlight">Winner is {winner}</h1>
                     <button className="reset" onClick={reset}>Reset Game</button>
                     </>
                   
              )
        }
        <h1 className="trun-highlight">Current Turn: {(trun) ? 'O' :'X'}</h1>
         <div className="grid">
        {board.map((el,idx) => <Card gameEnd={winner ? true:false} key={idx} onPlay={play} player={el} index={idx}/>)}

        </div>
        </div>
       );
}
export default Grid;



