import ArtPiecePreview from '../ArtPiecePreview/ArtPiecePreview';

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
    return (
      <>
        <ArtPiecePreview 
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          />
      </>
      );
    }