import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      I like
    </button>
  );
}

