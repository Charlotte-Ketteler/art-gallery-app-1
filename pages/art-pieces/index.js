import ArtPieces from "../../components/ArtPieces/ArtPieces.js";

export default function ArtPiecesPage({ 
    pieces, artPiecesInfo,
    onToggleFavorite }){

        if (!pieces) return <div>Loading...</div>;
        return (
          <ArtPieces
            pieces={pieces}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        );
      }


 