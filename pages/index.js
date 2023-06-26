import React from "react";
import Spotlight from "../components/Spotlight/index.js";
import Navbar from "../components/Navbar/Navbar.js";



export default function SpotlightPage({ pieces }) {


  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (

      <>
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}></Spotlight>
          
    </>

  );
}

  