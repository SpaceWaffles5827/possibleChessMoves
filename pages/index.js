import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const deafultBoard = ([[{TileC: 'white', Piece: 'r'}, {TileC: 'black', Piece: 'n'}, {TileC: 'white', Piece: 'b'}, {TileC: 'black', Piece: 'k'}, {TileC: 'white', Piece: 'q'}, {TileC: 'black', Piece: 'b'}, {TileC: 'white', Piece: 'n'}, {TileC: 'black', Piece: 'r'}],
  [{TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}],
  [{TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}],
  [{TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}],
  [{TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}],
  [{TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}, {TileC: 'black', Piece: null}, {TileC: 'white', Piece: null}],
  [{TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}, {TileC: 'white', Piece: 'p'}, {TileC: 'black', Piece: 'p'}],
  [{TileC: 'black', Piece: 'r'}, {TileC: 'white', Piece: 'n'}, {TileC: 'black', Piece: 'b'}, {TileC: 'white', Piece: 'q'}, {TileC: 'black', Piece: 'k'}, {TileC: 'white', Piece: 'b'}, {TileC: 'black', Piece: 'n'}, {TileC: 'white', Piece: 'r'}]]);

  const [boardData, setBoardData] = useState(deafultBoard);

  function resetBoardTileColors(){
    let newBoard = [...boardData];
    boardData.forEach((row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        newBoard[rowIndex][tileIndex].TileC = (rowIndex + tileIndex) % 2 === 0 ? 'white' : 'black';
      });
    }
    );
  }

  function possibleMoves(position, piece){
    resetBoardTileColors();
    if(piece === 'p'){
      const possibleMove = [position[0] - 1, position[1]]
      const updatedBoard = [...boardData]
      updatedBoard[possibleMove[0]][possibleMove[1]].TileC = 'green'
      setBoardData(updatedBoard)
    }
  }
  
  return (
    <div className={styles.app}>
      {/* <Board boardData={boardData}/> */}
      <Board boardData={boardData} possibleMoves={possibleMoves}/>
    </div>
  )
}
