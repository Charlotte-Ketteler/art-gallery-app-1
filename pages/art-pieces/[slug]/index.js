import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/index.js";



export default function ArtPieceDetailsPage({ pieces }) {
    //const [selectedArtPiece, setSelectedArtPiece] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
  
    if (pieces === undefined) return null;
    const selectedArtPiece = pieces?.find((piece) => piece.slug === slug);

    return (
      <div>
        <ArtPiecesDetails
          pieces={selectedArtPiece}
        />
        </div>
      );
    }