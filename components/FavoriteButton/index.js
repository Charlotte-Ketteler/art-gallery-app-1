import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      isFavorite={isFavorite}
      onClick={onToggleFavorite}
    >
      {isFavorite ? "Unlike" : "Like"}
    </button>
  );
}

