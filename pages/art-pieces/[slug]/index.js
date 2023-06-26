import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/index.js";


export default function ArtPieceDetailsPage({
  pieces
}) {
    const [selectedArtPiece, setSelectedArtPiece] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
  
    useEffect(() => {
      setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
    }, [setSelectedArtPiece, pieces, slug]);}

    return (
      <div>
     
        <ArtPiecesDetails
          onBack={() => router.back()}
          image={selectedArtPiece.imageSource}
          title={selectedArtPiece.name}
          artist={selectedArtPiece.artist}
          year={selectedArtPiece.year}
          genre={selectedArtPiece.genre}
        />
        </div>
      );