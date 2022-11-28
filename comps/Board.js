import Tile from "./Tile";
import styles from "../styles/Board.module.css";

//There is a pattern to the colors of a chess board. 
//If the column and row are both even or both odd, then the space is white. 
//If one is odd and the other is even, the space is black.



export default function Board({boardData, selectPiece}) {

    return (
        <div className={styles.Board}>
            {boardData.map((row, rowIndex) => {
                return row.map((tile, tileIndex) => {
                    const position = [rowIndex, tileIndex];
                    return <Tile selectPiece={selectPiece} position={position} value={tile}></Tile>
                })
            })}
        </div>
    )
}