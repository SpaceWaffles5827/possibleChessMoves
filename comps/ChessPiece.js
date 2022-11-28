export default function ChessPiece({selectPiece, value, position}) {

    return (
        <div onClick={() => selectPiece(position)}>
            <h1 style={{color: value.Piece.color}}>{value.Piece.Id}</h1>
        </div>
    )
}