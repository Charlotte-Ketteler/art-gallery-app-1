import ArtPieces from "../../components/ArtPieces/ArtPieces.js";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
    if (!pieces) return <div>Loading...</div>;
    const filteredArtPieces = pieces.filter(
      (artPiece) =>
        artPiecesInfo.find((artPieceInfo) => artPieceInfo.slug === artPiece.slug)
          ?.isFavorite
  );

  return (
    <ArtPieces
      pieces={filteredArtPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}