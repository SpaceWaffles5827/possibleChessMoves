import Tile from "./Tile";
import styles from "../styles/Board.module.css";

//There is a pattern to the colors of a chess board. 
//If the column and row are both even or both odd, then the space is white. 
//If one is odd and the other is even, the space is black.



export default function Board({boardData, possibleMoves}) {

    return (
        <div className={styles.Board}>
            {/* {boardData.map((row, rowIndex) => {
                return row.map((tile, tileIndex) => {
                    const position = [rowIndex, tileIndex];
                    return <Tile value={tile} position={position} boardData={boardData}></Tile>
                })
            })} */}
            {boardData.map((row, rowIndex) => {
                return row.map((tile, tileIndex) => {
                    const position = [rowIndex, tileIndex];
                    return <Tile position={position} value={tile} possibleMoves={possibleMoves}></Tile>
                })
            })}
        </div>
    )
}