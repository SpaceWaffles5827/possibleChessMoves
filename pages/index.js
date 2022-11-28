import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'

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
  const [selectedPiece, setSelectedPiece ] = useState(null);
  const [selectedPiecePosition, setSelectedPiecePosition ] = useState(null);
  const [ possiblePositions, setPossiblePositions ] = useState([]);

  useEffect(() => {
    if(selectedPiece !== null){
      DisplaypossibleMoves([6,1]);
    }
  }, [selectedPiece])
  
  function selectPiece(position){
    setSelectedPiecePosition(position);
    setSelectedPiece(boardData[[position[0]]][[position[1]]].Piece);
  }


  function resetBoardTileColors(){
    let newBoard = [...boardData];
    boardData.forEach((row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        newBoard[rowIndex][tileIndex].TileC = (rowIndex + tileIndex) % 2 === 0 ?  '#EEEED2' : '#769656';
      });
    });
  }

  function DisplaypossibleMoves(position){
    resetBoardTileColors();
    if(selectedPiece.Id === 'p'){
      if(selectedPiece.color === 'white'){
        const possibleMoves = [[selectedPiecePosition[0] - 1, selectedPiecePosition[1]], [selectedPiecePosition[0] - 2, selectedPiecePosition[1]]];
        const updatedBoard = [...boardData]
        possibleMoves.forEach(move => {
          updatedBoard[move[0]][move[1]].TileC = '#BBCA41';
        });
        setBoardData(updatedBoard)
      }
      if(selectedPiece.color === 'black'){
        const possibleMoves = [[selectedPiecePosition[0] + 1, selectedPiecePosition[1]], [selectedPiecePosition[0] + 2, selectedPiecePosition[1]]];
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
      <Board boardData={boardData} selectPiece={selectPiece}/>
    </div>
  )
}
