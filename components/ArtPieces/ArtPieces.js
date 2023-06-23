import React from 'react';

export default function ArtPieces({ pieces }) {
    return (
        <ul>
          {pieces?.map((piece) => (
            <li key={piece.slug}><h2>{piece.name}</h2></li>
          ))}
        </ul>
      );
    }