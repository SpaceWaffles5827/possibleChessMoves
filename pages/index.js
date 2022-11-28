import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const deafultBoard = ([[{TileC: '#EEEED2', Piece: 'r'}, {TileC: '#769656', Piece: 'n'}, {TileC: '#EEEED2', Piece: 'b'}, {TileC: '#769656', Piece: 'k'}, {TileC: '#EEEED2', Piece: 'q'}, {TileC: '#769656', Piece: 'b'}, {TileC: '#EEEED2', Piece: 'n'}, {TileC: '#769656', Piece: 'r'}],
  [{TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}],
  [{TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}],
  [{TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}],
  [{TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}],
  [{TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}, {TileC: '#769656', Piece: null}, {TileC: '#EEEED2', Piece: null}],
  [{TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}, {TileC: '#EEEED2', Piece: 'p'}, {TileC: '#769656', Piece: 'p'}],
  [{TileC: '#769656', Piece: 'r'}, {TileC: '#EEEED2', Piece: 'n'}, {TileC: '#769656', Piece: 'b'}, {TileC: '#EEEED2', Piece: 'q'}, {TileC: '#769656', Piece: 'k'}, {TileC: '#EEEED2', Piece: 'b'}, {TileC: '#769656', Piece: 'n'}, {TileC: '#EEEED2', Piece: 'r'}]]);

  const [boardData, setBoardData] = useState(deafultBoard);

  function resetBoardTileColors(){
    let newBoard = [...boardData];
    boardData.forEach((row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        newBoard[rowIndex][tileIndex].TileC = (rowIndex + tileIndex) % 2 === 0 ?  '#EEEED2' : '#769656';
      });
    });
    setBoardData(newBoard);
  }

  function possibleMoves(position, piece){
    resetBoardTileColors();
    if(piece === 'p'){
      const possibleMoves = [[position[0] - 1, position[1]], [position[0] - 2, position[1]]];
      const updatedBoard = [...boardData]
      possibleMoves.forEach(move => {
        updatedBoard[move[0]][move[1]].TileC = '#BBCA41';
      });
      setBoardData(updatedBoard)
    }
    else{

    }
  }
  
  return (
    <div className={styles.app}>
      {/* <Board boardData={boardData}/> */}
      <Board boardData={boardData} possibleMoves={possibleMoves}/>
    </div>
  )
}
