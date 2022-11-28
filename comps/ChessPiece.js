export default function ChessPiece({value, possibleMoves, position}) {

    return (
        <div onClick={() => possibleMoves(position, value.Piece.Id, value.Piece.color)}>
            <h1>{value.Piece.Id}</h1>
        </div>
    )
}