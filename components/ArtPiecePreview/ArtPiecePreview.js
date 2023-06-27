import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/index.js";

export default function ArtPiecePreview({
  artPiece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>{artPiece.name}</h2>
      <p>by {artPiece.artist}</p>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          width={480}
          height={608}
          alt={artPiece.name}
        />
      </Link>
      <div>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
        />
      </div>
    </div>
  );
}
  

