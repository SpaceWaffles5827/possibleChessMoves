export default function ChessPiece({value, possibleMoves, position}) {

    return (
        <div>
            <h1 onClick={() => possibleMoves(position, value.Piece)}>{value.Piece} </h1>
        </div>
    )
}