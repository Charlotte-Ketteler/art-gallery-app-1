import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments/index.js";

export default function ArtPiecesDetails({ pieces, isFavorite, onToggleFavorite, addComment,
  comments }){
  
  return (
    <article>
      <ul>
        <li key={pieces.slug}>
          <h2>{pieces.name}</h2>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={140}
            height={230}
          />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
          <p>{pieces.artist}</p>
          <p>{pieces.year}</p>
          <p>{pieces.genre}</p>
          <Link href={`/art-pieces`}>←</Link>
        </li>
      </ul>
      {comments && <Comments comments={comments} />}
      <CommentForm addComment={addComment} />
    </article>
  );
}