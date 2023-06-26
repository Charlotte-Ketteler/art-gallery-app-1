import React from "react";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({ pieces, artPiecesInfo, onToggleFavorite }) {
  const spotlightPiece = pieces[Math.floor(Math.random() * (pieces.length - 1))];

  const isFavorite = artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)?.isFavorite;

  return (
    <>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
      />
    </>
  );
}
