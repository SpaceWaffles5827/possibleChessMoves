import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const deafultBoard =([[{TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}],
                        [{TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#EEEED2', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: '#769656', Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}],
                        [{TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#769656', Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: '#EEEED2', Piece: {Id: '', StartPosition: [0,0], color: null}}]]);

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

  function possibleMoves(position, piece, color){
    resetBoardTileColors();
    if(piece === 'p'){
      if(color === 'white'){
        const possibleMoves = [[position[0] - 1, position[1]], [position[0] - 2, position[1]]];
        const updatedBoard = [...boardData]
        possibleMoves.forEach(move => {
          updatedBoard[move[0]][move[1]].TileC = '#BBCA41';
        });
        setBoardData(updatedBoard)
      }
      if(color === 'black'){
        const possibleMoves = [[position[0] + 1, position[1]], [position[0] + 2, position[1]]];
        const updatedBoard = [...boardData]
        possibleMoves.forEach(move => {
          updatedBoard[move[0]][move[1]].TileC = '#BBCA41';
        });
        setBoardData(updatedBoard)
      }
    }
  }

  return (
    <div className={styles.app}>
      {/* <Board boardData={boardData}/> */}
      <Board boardData={boardData} possibleMoves={possibleMoves}/>
    </div>
  )
}
