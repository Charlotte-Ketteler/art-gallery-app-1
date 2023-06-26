import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/index";

export default function ArtPiecePreview({ pieces, artPiecesInfo = [], onToggleFavorite }) {
  const isFavorite = (slug) => {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    return artPiece ? artPiece.isFavorite : false;
  };

  return (
    <article>
      <ul>
        {pieces?.map((piece) => {
          const favorite = isFavorite(piece.slug);

          return (
            <li key={piece.slug}>
              <h2>{piece.name}</h2>
              <Image src={piece.imageSource} alt={piece.name} width={140} height={230} />
              <FavoriteButton
                isFavorite={favorite}
                onToggleFavorite={() => handleToggleFavorite(piece.slug)}
              />
              <p>{piece.artist}</p>
              <Link href={`/art-pieces/${piece.slug}`}>Weitere Details</Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

