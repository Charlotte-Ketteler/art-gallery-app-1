import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview.js";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
      return (
        <ul>
          {pieces.map((artPiece) => {
            const artPieceInfo = artPiecesInfo.find(
              (artPieceInfo) => artPieceInfo.slug === artPiece.slug
            ) ?? { isFavorite: false };
        return (
          <ArtPiecePreview
            key={artPiece.slug}
            artPiece={artPiece}
            isFavorite={artPieceInfo.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </ul>
  );
}