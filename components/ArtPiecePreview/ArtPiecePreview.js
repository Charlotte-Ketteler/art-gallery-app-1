import Image from "next/image";
import Link from "next/link";


export default function ArtPiecePreview({ pieces }) {
  return (
    <article>
      <ul>
        {pieces?.map((piece) => {
  
  return (
    <li key={piece.slug}>
      
        <h2>{piece.name}</h2>
        <Image src={piece.imageSource}
         alt={piece.name}
         width={140}
         height={230}
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