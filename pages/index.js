import React from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces.js";



export default function HomePage() {
  const { data, error } = useSWR('artPieces', async () => {
    const response = await fetch('https://example-apis.vercel.app/api/art');
    const data = await response.json();
    return data;
  });

  if (error) return <div>Error loading art pieces.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Art Pieces</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}

  