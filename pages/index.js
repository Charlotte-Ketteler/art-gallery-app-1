import React from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces.js";
import Spotlight from "../components/Spotlight/index.js";




export default function HomePage({ pieces }) {
  const { data, error } = useSWR('artPieces', async () => {
    const response = await fetch('https://example-apis.vercel.app/api/art');
    const data = await response.json();
    return data;
  });

  if (error) return <div>Error loading art pieces.</div>;
  if (!data) return <div>Loading...</div>;

  const spotlightPiece =
    data[Math.floor(Math.random() * (data.length - 1))];

  return (

      <>
      <h1>Art Pieces List</h1>
      <ArtPieces pieces={data} />
      
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}></Spotlight>
    </>

  );
}

  