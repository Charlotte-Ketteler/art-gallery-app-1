import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useImmerLocalStorageState } from "./useImmerLocalStorageState";




export default function App({ Component, pageProps }) {
  const router = useRouter();
  const fetcher = (URL) => fetch(URL).then((response)=> response.json())
  const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  useEffect(() => {
    const storedArtPiecesInfo = localStorage.getItem("artPiecesInfo");
    if (storedArtPiecesInfo) {
      setArtPiecesInfo(JSON.parse(storedArtPiecesInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("artPiecesInfo", JSON.stringify(artPiecesInfo));
  }, [artPiecesInfo]);


  if (error) return <div>Error loading art pieces.</div>;
  if (!data) return <div>Loading...</div>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
 
  const favoriteArtPieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }
  
  return (
    <>
      <GlobalStyle />
      <Component 
      {...pageProps} 
      pieces={data} 
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={handleToggleFavorite}
      addComment={addComment} />
      <Layout/>
    </>
  );
}
