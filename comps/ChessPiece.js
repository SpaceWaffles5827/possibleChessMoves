import Image from "next/image"

export default function ChessPiece({selectPiece, value, position}) {

    function returnCorectImageComp(){
        let color = null
        let id = value.Piece.Id
        if(id !== null){
            color = value.Piece.color
        }
        if(color === "white"){
            if(value.Piece.Id === "p"){
                return(<Image src="/images/wP.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "r"){
                return(<Image src="/images/wR.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "n"){
                return(<Image src="/images/wN.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "b"){
                return(<Image src="/images/wB.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "q"){
                return(<Image src="/images/wQ.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "k"){
                return(<Image src="/images/wK.svg" height={75} width={75} />)
            }
            return 'error'
        }
        else if(color === "black"){
            if(value.Piece.Id === "p"){
                return(<Image src="/images/bP.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "r"){
                return(<Image src="/images/bR.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "n"){
                return(<Image src="/images/bN.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "b"){
                return(<Image src="/images/bB.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "q"){
                return(<Image src="/images/bQ.svg" height={75} width={75} />)
            }
            if(value.Piece.Id === "k"){
                return(<Image src="/images/bK.svg" height={75} width={75} />)
            }
            return 'error'
        }
    }

    return (
        <div onClick={() => selectPiece(position)}>
            {returnCorectImageComp()}
            {/* <h1 style={{color: value.Piece.color}}>{value.Piece.Id}</h1> */}
        </div>
    )
}