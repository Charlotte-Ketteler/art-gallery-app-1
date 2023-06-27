import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "../components/Layout/Layout.js";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";

const fetcher = (URL) => fetch(URL).then((response)=> response.json())

export default function App({ Component, pageProps }) {
const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
  "art-pieces-info",
  { defaultValue: [] }
);

function handleToggleFavorite(slug) {
  updateArtPiecesInfo((draft) => {
    const artPieceInfo = draft.find(
      (artPieceInfo) => artPieceInfo.slug === slug
      );
    
      if (artPieceInfo) {
        artPieceInfo.isFavorite = !artPieceInfo.isFavorite;
      } else {
        draft.push({ slug, isFavorite: true });
      }
    });
  }
 
  function handleSubmitComment(slug, comment) {
    updateArtPiecesInfo((draft) => {
      const artPieceInfo = draft.find(
        (artPieceInfo) => artPieceInfo.slug === slug
      );

    if (artPieceInfo) {
        if (!artPieceInfo.comments) artPieceInfo.comments = [];
        artPieceInfo.comments.push({ comment, datetime: new Date() });
      } else {
        draft.push({
          slug,
          isFavorite: false,
          comments: [{ comment, datetime: new Date() }],
        });
      }
    });
  }
  
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
      <Component 
      {...pageProps} 
      pieces={data} 
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={handleToggleFavorite}
      onSubmitComment={handleSubmitComment} />
      <Layout/>
      </SWRConfig>
    </>
  );
}
