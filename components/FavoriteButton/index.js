import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
       <Image src="/public/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}

