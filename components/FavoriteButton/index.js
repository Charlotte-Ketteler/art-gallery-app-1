import Image from "next/image";

export default function FavoriteButton({ isFavorite, handleToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      I like
    </button>
  );
}

