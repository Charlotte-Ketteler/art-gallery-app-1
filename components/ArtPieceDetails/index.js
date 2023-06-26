import Image from "next/image";
import Link from "next/link";

export default function ArtPiecesDetails({ pieces }){
  
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
          <p>{pieces.artist}</p>
          <p>{pieces.year}</p>
          <p>{pieces.genre}</p>
          <Link href={`/art-pieces`}>←</Link>
        </li>
      </ul>
    </article>
  );
}