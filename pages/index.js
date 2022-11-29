import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {

  // const whiteTileColor = '#EEEED2';
  // const blackTileColor = '#769656';
  const whiteTileColor = '#AACCDB';
  const blackTileColor = '#0781D5';

  const deafultBoard =([[{TileC: whiteTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'k', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'q', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'black'}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'q', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'q', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'k', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'white'}}]]);
  
  const [boardData, setBoardData] = useState(deafultBoard);
  const [selectedPiece, setSelectedPiece ] = useState(null);
  const [selectedPiecePosition, setSelectedPiecePosition ] = useState(null);
  const [ possiblePositions, setPossiblePositions ] = useState([]);
  const [ locationOfPiecesWithPossibleMoves, setLocationOfPiecesWithPossibleMoves ] = useState([]);
  

  useEffect(() => {
    if(selectedPiece !== null){
      DisplaypossibleMoves();
    }
  }, [selectedPiece])
  
  function selectPiece(position, isMakingMove){
    console.log(position)
    setSelectedPiecePosition(position);
    setSelectedPiece(boardData[[position[0]]][[position[1]]].Piece);
  }

  function MoviePiece(position){
    let newBoard = boardData;
    newBoard[[selectedPiecePosition[0]]][[selectedPiecePosition[1]]].Piece = {Id: '', StartPosition: [0,0], color: null};
    newBoard[[position[0]]][[position[1]]].Piece = selectedPiece;
    setBoardData(newBoard);
    setSelectedPiece(null);
    setSelectedPiecePosition(null);
    setPossiblePositions([]);
  }


  function resetMovavleTiles(){
    let newBoard = [...boardData];
    boardData.forEach((row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        newBoard[rowIndex][tileIndex].moveable = false;
      });
    });
  }

  function DisplaypossibleMoves(){
    resetMovavleTiles();
    if(selectedPiece.Id === 'p'){
      let possibleMoves = [];
      if(selectedPiece.color === 'white'){
        for(let i = 1; i < 3; i++){
          if(boardData[[selectedPiecePosition[0] - i]][[selectedPiecePosition[1]]].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1]]);
          }
        }

        const updatedBoard = [...boardData]
        possibleMoves.forEach(move => {
          updatedBoard[move[0]][move[1]].moveable = true;
        });
        setBoardData(updatedBoard)
      }
      if(selectedPiece.color === 'black'){        
        for(let i = 1; i < 3; i++){
          if(boardData[[selectedPiecePosition[0] + i]][[selectedPiecePosition[1]]].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1]]);
          }
        }
        
        const updatedBoard = [...boardData]
        possibleMoves.forEach(move => {
          updatedBoard[move[0]][move[1]].moveable = true;
        });
        setBoardData(updatedBoard)
      }
    }
    if(selectedPiece.Id === 'r'){
      let possibleMoves = [];
      
      for(let i = 1; i < 8; i++){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1]]);
      }
      for(let i = 1; i < 8; i++){
          possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1]]);
      }
      for(let i = 1; i < 8; i++){
          possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] - i]);
      }
      for(let i = 1; i < 8; i++){
          possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] + i]);
      }


      const updatedBoard = [...boardData]
      
      possibleMoves.forEach(move => {
        if(move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7){
          updatedBoard[move[0]][move[1]].moveable = true;
        }
      });

      setBoardData(updatedBoard)
    }
    if(selectedPiece.Id === 'b'){
      let possibleMoves = [];
      const updatedBoard = [...boardData]

      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] - i >= 0){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] - i]);
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] + i <= 7){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] + i]);
        }
      }

      possibleMoves.forEach(move => {
        updatedBoard[move[0]][move[1]].moveable = true;
      });


      setBoardData(updatedBoard)
    }
    if(selectedPiece.Id === 'n'){
      let possibleMoves = [];
      for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          if(Math.abs(selectedPiecePosition[0] - i) === 2 && Math.abs(selectedPiecePosition[1] - j) === 1){
            possibleMoves.push([i, j]);
          }
          if(Math.abs(selectedPiecePosition[0] - i) === 1 && Math.abs(selectedPiecePosition[1] - j) === 2){
            possibleMoves.push([i, j]);
          }
        }
      }
      const updatedBoard = [...boardData]
      possibleMoves.forEach(move => {
        updatedBoard[move[0]][move[1]].moveable = true;
      });
      setBoardData(updatedBoard)
    }
    if(selectedPiece.Id === 'k'){
      let possibleMoves = [];
      
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] - i >= 0){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] - i]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] + i <= 7){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] + i]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] + i <= 7 && selectedPiecePosition[1] - i >= 0){
          possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1] - i]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] + i <= 7 && selectedPiecePosition[1] + i <= 7){
          possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1] + i]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] - i >= 0){
          possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1]]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[0] + i <= 7){
          possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1]]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[1] - i >= 0){
          possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] - i]);
        }
      }
      for(let i = 1; i < 2; i++){
        if(selectedPiecePosition[1] + i <= 7){
          possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] + i]);
        }
      }


      const updatedBoard = [...boardData]
      
      possibleMoves.forEach(move => {
        if(move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7){
          updatedBoard[move[0]][move[1]].moveable = true;
        }
      });

      setBoardData(updatedBoard)
    }
    if(selectedPiece.Id === 'q'){
      let possibleMoves = [];
      

      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] - i >= 0){
          if(boardData[selectedPiecePosition[0] - i][selectedPiecePosition[1] - i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] - i]);
          }
          else{
            break;
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] - i >= 0 && selectedPiecePosition[1] + i <= 7){
          if(boardData[selectedPiecePosition[0] - i][selectedPiecePosition[1] + i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1] + i]);
          }
          else{
            break
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] + i <= 7 && selectedPiecePosition[1] - i >= 0){
          if(boardData[selectedPiecePosition[0] + i][selectedPiecePosition[1] - i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1] - i]);
          }
          else{
            break
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] + i <= 7 && selectedPiecePosition[1] + i <= 7){
          if(boardData[selectedPiecePosition[0] + i][selectedPiecePosition[1] + i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1] + i]);
          }
          else{
            break
          }
        }
      }

      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] - i >= 0){
          if(boardData[selectedPiecePosition[0] - i][selectedPiecePosition[1]].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] - i, selectedPiecePosition[1]]);
          }
          else{
            break
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[0] + i <= 7){
          if(boardData[selectedPiecePosition[0] + i][selectedPiecePosition[1]].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0] + i, selectedPiecePosition[1]]);
          }
          else{
            break
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[1] - i >= 0){
          if(boardData[selectedPiecePosition[0]][selectedPiecePosition[1] - i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] - i]);
          }
          else{
            break
          }
        }
      }
      for(let i = 1; i < 8; i++){
        if(selectedPiecePosition[1] + i <= 7){
          if(boardData[selectedPiecePosition[0]][selectedPiecePosition[1] + i].Piece.Id === ''){
            possibleMoves.push([selectedPiecePosition[0], selectedPiecePosition[1] + i]);
          }
          else{
            break
          }
        }
      }

      const updatedBoard = [...boardData]
      
      possibleMoves.forEach(move => {
        if(move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7){
          
          updatedBoard[move[0]][move[1]].moveable = true;
        }
      });
      setBoardData(updatedBoard)
    }
  }

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  function loopsOverBoardData(){
    let locationOfPiecesWithPossibleMoves = [];
    boardData.forEach((row, rowIndex) => {
      row.forEach((square, squareIndex) => {
        if(square.Piece.Id !== ''){
          locationOfPiecesWithPossibleMoves.push([rowIndex, squareIndex])
        }
      })
    })
    setLocationOfPiecesWithPossibleMoves(locationOfPiecesWithPossibleMoves)
  }

  return (
    <div className={styles.app}>
      {/* {console.log(selectedPiece)} */}
      {console.log(locationOfPiecesWithPossibleMoves)}
      <Board boardData={boardData} selectPiece={selectPiece}/>
      <button onClick={() => loopsOverBoardData(loopsOverBoardData)}>looper</button>
    </div>
  )
}

//create an array and a seperate loop that handles the couting than we can set state with no isues use the count as index of array