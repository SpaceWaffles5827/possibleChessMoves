import styles from '../styles/Tile.module.css'
import ChessPiece from './ChessPiece';
import { useState } from 'react';

//If the column and row are both even or both odd, then the space is white. 
//If one is odd and the other is even, the space is black.

export default function Tile({value, position, selectPiece}) {

    function getTileColr(){
        if(value && value.moveable){
            return 'green';
        }else{
            return value.TileC;
        }
    }

    function handleClick(){
        selectPiece(position);
    }

    return (
        <div onClick={() => handleClick()} className={styles.Tile} style={{backgroundColor: getTileColr()}}>
            <ChessPiece selectPiece={selectPiece} position={position} value={value}></ChessPiece>
        </div>
    )
}