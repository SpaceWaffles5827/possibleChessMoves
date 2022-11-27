import styles from '../styles/Tile.module.css'

//If the column and row are both even or both odd, then the space is white. 
//If one is odd and the other is even, the space is black.

export default function Tile({rowIndex, columnIndex ,value, onClick}) {

    function determineColor() {
        if ((rowIndex + columnIndex) % 2 === 0) {
            return 'white';
        } else {
            return 'black';
        }
    }

    function determineFontColor() {
        if ((rowIndex + columnIndex) % 2 === 0) {
            return 'black';
        } else {
            return 'white';
        }
    }

    return (
        <div className={styles.Tile} style={{backgroundColor: determineColor()}}>
            <h1 style={{color: determineFontColor()}}>{rowIndex+1}{columnIndex+1}</h1>
        </div>
    )
}