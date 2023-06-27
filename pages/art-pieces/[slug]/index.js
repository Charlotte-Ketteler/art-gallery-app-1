import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/index.js";



export default function ArtPieceDetailsPage({ pieces, artPiecesInfo,
  onToggleFavorite }) {
    //const [selectedArtPiece, setSelectedArtPiece] = useState(null);
    const router = useRouter();
    if (!pieces) return <div>Loading...</div>;
    const { slug } = router.query;
    const artPiece = pieces.find((piece) => piece.slug === slug);
    const artPieceInfo = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    ) ?? { isFavorite: false };

    return (
      
        <ArtPiecesDetails
          {...artPiece}
          isFavorite={artPieceInfo.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      );
    }