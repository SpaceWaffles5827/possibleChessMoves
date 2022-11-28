import styles from '../styles/Tile.module.css'
import ChessPiece from './ChessPiece';
import { useState } from 'react';

//If the column and row are both even or both odd, then the space is white. 
//If one is odd and the other is even, the space is black.

export default function Tile({value, position, selectPiece}) {

    return (
        <div className={styles.Tile} style={{backgroundColor: value.TileC}}>
            <ChessPiece selectPiece={selectPiece} position={position} value={value}></ChessPiece>
        </div>
    )
}