import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {

  const whiteTileColor = '#AACCDB';
  const blackTileColor = '#0781D5';

  const deafultBoard =([[{TileC: whiteTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'k', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'q', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'black'}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'black'}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: blackTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: '', StartPosition: [0,0], color: null}}],
                        [{TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'p', StartPosition: [0,0], color: 'white'}}],
                        [{TileC: blackTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'q', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'k', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'b', StartPosition: [0,0], color: 'white'}}, {TileC: blackTileColor, moveable: false, Piece: {Id: 'n', StartPosition: [0,0], color: 'white'}}, {TileC: whiteTileColor, moveable: false, Piece: {Id: 'r', StartPosition: [0,0], color: 'white'}}]]);
  
  const [boardData, setBoardData] = useState(deafultBoard);
  const [selectedPiece, setSelectedPiece ] = useState(null);
  const [selectedPiecePosition, setSelectedPiecePosition ] = useState(null);
  const [ possiblePositions, setPossiblePositions ] = useState([]);
  const [ locationOfPieces, setLocationOfPieces ] = useState([]);
  const [ turn, setTurn ] = useState('white');
  const [ indexOfMoveablePieces, setIndexOfMoveablePieces ] = useState(0);
  


  useEffect(() => {
    setLocationOfPiecesButton();
  }, []);
    

  useEffect(() => {
    if(selectedPiece !== null){
      DisplaypossibleMoves();
    }
  }, [selectedPiece])
  
  function selectPiece(position){
    if(boardData[position[0]][position[1]].moveable === true){
      MoviePiece(position);
      resetMovavleTiles(); 
    }
    else{
      resetMovavleTiles();
      setSelectedPiecePosition(position);
      setSelectedPiece(boardData[[position[0]]][[position[1]]].Piece);
    }
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
    setBoardData(newBoard);
  }

  function DisplaypossibleMoves(){
    let possibleMoves = getPossibleMovePositions([selectedPiecePosition[0], selectedPiecePosition[1]]);
    let newBoard = [...boardData];

    if(possibleMoves){
      possibleMoves.forEach((move) => {
        newBoard[[move[0]]][[move[1]]].moveable = true;
      });
    }
    setBoardData(newBoard);
  }

  function setLocationOfPiecesButton(){
    let locationOfPieces = [];
    boardData.forEach((row, rowIndex) => {
      row.forEach((square, squareIndex) => {
        if(square.Piece.Id !== ''){
          locationOfPieces.push([rowIndex, squareIndex])
        }
      })
    })
    setLocationOfPieces(locationOfPieces)
  }

  function loopThrouhAllPieces(){
    locationOfPieces.forEach(position => {
      getPossibleMovePositions(position).map((move) => {
        console.log(position, move)
      })
    })
  }

  function resetBoard(){
    setBoardData(deafultBoard);
  }


  function getPossibleMovePositions(position){
    let enemyInWayTop = false;
    let enemyInWayBottom = false;
    let enemyInWayLeft = false;
    let enemyInWayRight = false;
    let enemyInWayTopLeft = false;
    let enemyInWayTopRight = false;
    let enemyInWayBottomLeft = false;
    let enemyInWayBottomRight = false;

    let possibleMoves = [];
    if(boardData[position[0]][position[1]].Piece.Id === 'p'){
        if(boardData[position[0]][position[1]].Piece.color === 'white'){
          if(position[0] === 6){
            for(let i = 1; i < 3; i++){
              if(boardData[position[0] - i][position[1]].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1]])
              }
            }
          }
          else{
            if(boardData[position[0] - 1][position[1]].Piece.Id === ''){
              possibleMoves.push([position[0] - 1, position[1]])
            }
          }
          if(position[0] - 1 >= 0 && position[1] - 1 >= 0 && position[0] - 1 <= 7 && position[1] - 1 <= 7 && position[1] + 1 >= 0 && position[1] + 1 <= 7){
            if(boardData[position[0] - 1][position[1] - 1].Piece.color === 'black'){
              possibleMoves.push([position[0] - 1, position[1] - 1])
            }
            if(boardData[position[0] - 1][position[1] + 1].Piece.color === 'black'){
              possibleMoves.push([position[0] - 1, position[1] + 1])
            }
          }
        }

        
        else{
          if(position[0] + 1 <= 7 && position[1] - 1 >= 0 ){
            if(position[0] + 1 <= 7 && position[1] - 1 >= 0 && position[0] + 1 <= 7 && position[1] - 1 <= 7 && position[1] + 1 >= 0 && position[1] + 1 <= 7){
              if(boardData[position[0] + 1][position[1] - 1].Piece.color === 'white'){
                possibleMoves.push([position[0] + 1, position[1] - 1])
              }
              if(boardData[position[0] + 1][position[1] + 1].Piece.color === 'white'){
                possibleMoves.push([position[0] + 1, position[1] + 1])
              }
            }
          }
          if(position[0] === 1){
            for(let i = 1; i < 3; i++){
              if(boardData[position[0] + i][position[1]].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1]])
              }
            }
          }
          else{
            if(boardData[position[0] + 1][position[1]].Piece.Id === ''){
              possibleMoves.push([position[0] + 1, position[1]])
            }
          }
        }
        /////////////////////////////
      }
      else if(boardData[position[0]][position[1]].Piece.Id === 'r'){
        for(let i = 1; i < 8; i++){
          if(!enemyInWayTop){
            if(position[0] - i >= 0){
              if(boardData[position[0] - i][position[1]].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1]]);
              }
              else{
                enemyInWayTop = true;
                if(boardData[position[0] - i][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1]]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottom){
            if(position[0] + i <= 7){
              if(boardData[position[0] + i][position[1]].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1]]);
              }
              else{
                enemyInWayBottom = true;
                if(boardData[position[0] + i][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1]]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayLeft){
            if(position[1] - i >= 0){
              if(boardData[position[0]][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0], position[1] - i]);
              }
              else{
                enemyInWayLeft = true;
                if(boardData[position[0]][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0], position[1] - i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayRight){
            if(position[1] + i <= 7){
              if(boardData[position[0]][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0], position[1] + i]);
              }
              else{
                enemyInWayRight = true;
                if(boardData[position[0]][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0], position[1] + i]);
                }
              }
            }
          }
        }
      }
      else if(boardData[position[0]][position[1]].Piece.Id === 'n'){
        if(position[0] - 2 >= 0){
          if(position[1] - 1 >= 0){
            if(boardData[position[0] - 2][position[1] - 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] - 2, position[1] - 1])
            }
          }
          if(position[1] + 1 <= 7){
            if(boardData[position[0] - 2][position[1] + 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] - 2, position[1] + 1])
            }
          }
        }
        if(position[0] + 2 <= 7){
          if(position[1] - 1 >= 0){
            if(boardData[position[0] + 2][position[1] - 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] + 2, position[1] - 1])
            }
          }
          if(position[1] + 1 <= 7){
            if(boardData[position[0] + 2][position[1] + 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] + 2, position[1] + 1])
            }
          }
        }
        if(position[1] - 2 >= 0){
          if(position[0] - 1 >= 0){
            if(boardData[position[0] - 1][position[1] - 2].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] - 1, position[1] - 2])
            }
          }
          if(position[0] + 1 <= 7){
            if(boardData[position[0] + 1][position[1] - 2].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] + 1, position[1] - 2])
            }
          }
        }
        if(position[1] + 2 <= 7){
          if(position[0] - 1 >= 0){
            if(boardData[position[0] - 1][position[1] + 2].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] - 1, position[1] + 2])
            }
          }
          if(position[0] + 1 <= 7){
            if(boardData[position[0] + 1][position[1] + 2].Piece.color !== boardData[position[0]][position[1]].Piece.color){
              possibleMoves.push([position[0] + 1, position[1] + 2])
            }
          }
        }
      }
      else if(boardData[position[0]][position[1]].Piece.Id === 'b'){
        for(let i = 1; i < 8; i++){
          if(!enemyInWayTopLeft){
            if(position[0] - i >= 0 && position[1] - i >= 0){
              if(boardData[position[0] - i][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1] - i]);
              }
              else{
                enemyInWayTopLeft = true;
                if(boardData[position[0] - i][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1] - i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayTopRight){
            if(position[0] + i <= 7 && position[1] + i <= 7){
              if(boardData[position[0] + i][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1] + i]);
              }
              else{
                enemyInWayTopRight = true;
                if(boardData[position[0] + i][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1] + i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottomLeft){
            if(position[0] - i >= 0 && position[1] + i <= 7){
              if(boardData[position[0] - i][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1] + i]);
              }
              else{
                enemyInWayBottomLeft = true;
                if(boardData[position[0] - i][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1] + i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottomRight){
            if(position[0] + i <= 7 && position[1] - i >= 0){
              if(boardData[position[0] + i][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1] - i]);
              }
              else{
                enemyInWayBottomRight = true;
                if(boardData[position[0] + i][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1] - i]);
                }
              }
            }
          }
      }
      }
      else if(boardData[position[0]][position[1]].Piece.Id === 'q'){


        for(let i = 1; i < 8; i++){
          if(!enemyInWayTop){
            if(position[0] - i >= 0 ){
              if(boardData[position[0] - i][position[1]].Piece.Id === ''){
                  possibleMoves.push([position[0] - i, position[1]]);
              }
              else{
                enemyInWayTop = true;
                if(boardData[position[0] - i][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1]]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottom){
            if(position[0] + i <= 7){
              if(boardData[position[0] + i][position[1]].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1]]);
              }
              else{
                enemyInWayBottom = true;
                if(boardData[position[0] + i][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1]]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayLeft){
            if(position[1] - i >= 0){
              if(boardData[position[0]][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0], position[1] - i]);
              }
              else{
                enemyInWayLeft = true;
                if(boardData[position[0]][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0], position[1] - i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayRight){
            if(position[1] + i <= 7){
              if(boardData[position[0]][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0], position[1] + i]);
              }
              else{
                enemyInWayRight = true;
                if(boardData[position[0]][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0], position[1] + i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
            if(!enemyInWayTopLeft){
            if(position[0] - i >= 0 && position[1] - i >= 0){
              if(boardData[position[0] - i][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1] - i]);
              }
              else{
                enemyInWayTopLeft = true;
                if(boardData[position[0] - i][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1] - i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayTopRight){
            if(position[0] + i <= 7 && position[1] + i <= 7){
              if(boardData[position[0] + i][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1] + i]);
              }
              else{
                enemyInWayTopRight = true;
                if(boardData[position[0] + i][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1] + i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottomLeft){
            if(position[0] - i >= 0 && position[1] + i <= 7){
              if(boardData[position[0] - i][position[1] + i].Piece.Id === ''){
                possibleMoves.push([position[0] - i, position[1] + i]);
              }
              else{
                enemyInWayBottomLeft = true;
                if(boardData[position[0] - i][position[1] + i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] - i, position[1] + i]);
                }
              }
            }
          }
        }
        for(let i = 1; i < 8; i++){
          if(!enemyInWayBottomRight){
            if(position[0] + i <= 7 && position[1] - i >= 0){
              if(boardData[position[0] + i][position[1] - i].Piece.Id === ''){
                possibleMoves.push([position[0] + i, position[1] - i]);
              }
              else{
                enemyInWayBottomRight = true;
                if(boardData[position[0] + i][position[1] - i].Piece.color !== boardData[position[0]][position[1]].Piece.color){
                  possibleMoves.push([position[0] + i, position[1] - i]);
                }
              }
            }
          }
        }
      }
      else if(boardData[position[0]][position[1]].Piece.Id === 'k'){
        if(position[0] - 1 >= 0){
          if(boardData[position[0] - 1][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] - 1, position[1]])
          }
        }
        if(position[0] + 1 <= 7){
          if(boardData[position[0] + 1][position[1]].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] + 1, position[1]])
          }
        }
        if(position[1] - 1 >= 0){
          if(boardData[position[0]][position[1] - 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0], position[1] - 1])
          }
        }
        if(position[1] + 1 <= 7){
          if(boardData[position[0]][position[1] + 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0], position[1] + 1])
          }
        }
        if(position[0] - 1 >= 0 && position[1] - 1 >= 0){
          if(boardData[position[0] - 1][position[1] - 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] - 1, position[1] - 1])
          }
        }
        if(position[0] + 1 <= 7 && position[1] + 1 <= 7){
          if(boardData[position[0] + 1][position[1] + 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] + 1, position[1] + 1])
          }
        }
        if(position[0] - 1 >= 0 && position[1] + 1 <= 7){
          if(boardData[position[0] - 1][position[1] + 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] - 1, position[1] + 1])
          }
        }
        if(position[0] + 1 <= 7 && position[1] - 1 >= 0){
          if(boardData[position[0] + 1][position[1] - 1].Piece.color !== boardData[position[0]][position[1]].Piece.color){
            possibleMoves.push([position[0] + 1, position[1] - 1])
          }
        }
      }
      return possibleMoves;
    }
  

  function nextButton(){
    console.log(indexOfMoveablePieces)
    resetMovavleTiles();
    let newBoard = [...boardData];
    let movableSquares = [];
    if(locationOfPieces[indexOfMoveablePieces]){
      getPossibleMovePositions(locationOfPieces[indexOfMoveablePieces]).map((position) => {
        newBoard[position[0]][position[1]].moveable = true;
        movableSquares.push(newBoard[position[0]][position[1]]);
      });
      setIndexOfMoveablePieces(indexOfMoveablePieces + 1);    
      setBoardData(newBoard);
    }
    else{
      setIndexOfMoveablePieces(0);
    }
  }

  return (
    <div className={styles.app}>
      {/* {console.log(locationOfPieces)} */}
      <Board boardData={boardData} selectPiece={selectPiece}/>
      <button onClick={() => loopThrouhAllPieces()}>looper</button>
      <button onClick={() => resetBoard()}>reset</button>
      <button onClick={() => nextButton()}>next</button>
    </div>
  )
}

//create an array and a seperate loop that handles the couting than we can set state with no isues use the count as index of array