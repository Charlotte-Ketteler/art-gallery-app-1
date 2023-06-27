import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/index.js";
import Comments from "../../../components/Comments/index.js";
import CommentForm from "@/components/CommentForm/index.js";



export default function ArtPieceDetailsPage({ pieces, artPiecesInfo,
  onToggleFavorite, onSubmitComment }) {
    //const [selectedArtPiece, setSelectedArtPiece] = useState(null);
    const router = useRouter();
    if (!pieces) return <div>Loading...</div>;
    const { slug } = router.query;
    const artPiece = pieces.find((piece) => piece.slug === slug);
    const artPieceInfo = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    ) ?? { isFavorite: false, slug: artPiece.slug };

    return (
      <>
        <ArtPiecesDetails
          {...artPiece}
          isFavorite={artPieceInfo.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <Comments comments={artPieceInfo.comments} />
        <CommentForm
          onSubmitComment={(comment) =>
            onSubmitComment(artPieceInfo.slug, comment)
        }
      />
      </>
      );
    }