import ArtPieces from "../../components/ArtPieces/ArtPieces.js";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  //onArtPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return (
    <ArtPieces
      pieces={favorites}
      //onArtPiecesInfo={onArtPiecesInfo}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}