import React from "react";
import Spotlight from "../components/Spotlight/index.js";
import { useEffect, useState } from "react";

export default function SpotlightPage({ pieces, artPiecesInfo, onToggleFavorite }) {
  const [randomArtPiece, setRandomArtPiece] = useState();


  useEffect(() => {
    if (pieces && pieces.length > 0) {
      setRandomArtPiece(
        pieces[Math.floor(Math.random() * pieces.length)]
      );
    }
  }, [pieces]);

  if (!randomArtPiece) return <div>Loading...</div>;

  const additionalInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === randomArtPiece.slug
  ) ?? { isFavorite: false };
  return (
    <>
      <Spotlight
        image={randomArtPiece.imageSource}
        name={randomArtPiece.name}
        artist={randomArtPiece.artist}
        slug={randomArtPiece.slug}
        isFavorite={additionalInfo.isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
