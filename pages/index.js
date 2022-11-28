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
    console.log('resetBoardTileColors');
    const newBoard = boardData.map((row, rowIndex) => {
      return row.map((tile, tileIndex) => {
        const position = [rowIndex, tileIndex];
        if ((rowIndex + tileIndex) % 2 === 0){
          return {TileC: 'white', Piece: tile.Piece}
        } else {
          return {TileC: 'black', Piece: tile.Piece}
        }
      })
    })
    setBoardData(newBoard);
  }

  function possibleMoves(position, piece){
    resetBoardTileColors();
    if(piece === 'p'){
      const possibleMove = [position[0] - 1, position[1]]
      const newBoardData = boardData.map((row, rowIndex) => {
        return row.map((tile, tileIndex) => {
          if(rowIndex === possibleMove[0] && tileIndex === possibleMove[1]){
            return {TileC: 'green', Piece: null}
          } else {
            return tile
          }
        })
      })
      setBoardData(newBoardData)
    }
  }
  
  return (
    <div className={styles.app}>
      {/* <Board boardData={boardData}/> */}
      <Board boardData={boardData} possibleMoves={possibleMoves}/>
    </div>
  )
}
