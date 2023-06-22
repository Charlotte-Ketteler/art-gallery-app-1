import React from 'react';

export default function ArtPieces({ pieces }) {
    return (
        <ul>
          {pieces?.map((piece) => (
            <li key={piece.slug}>{piece.name}</li>
          ))}
        </ul>
      );
    }