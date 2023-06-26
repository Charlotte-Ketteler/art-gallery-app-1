import Image from "next/image";

export default function FavoriteButton({ isFavorite, handleToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}

