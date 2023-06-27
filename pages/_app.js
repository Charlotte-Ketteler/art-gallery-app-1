import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "../components/Layout/Layout.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";



const fetcher = (URL) => fetch(URL).then((response)=> response.json())

export default function App({ Component, pageProps }) {
const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
const [artPiecesInfo, setArtPiecesInfo] = useState([]);

function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
 
  function handleSubmitComment(slug, comment) {
    const artPieceInfo = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    if (artPieceInfo) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? {
                ...artPiece,
                comments: [
                  ...artPiece.comments,
                  { comment, datetime: new Date() },
                ],
              }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        {
          slug,
          isFavorite: false,
          comments: [{ comment, datetime: new Date() }],
        },
      ]);
    }
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
