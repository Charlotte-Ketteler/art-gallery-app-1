import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
    image,
    artist
  }) {
    return (
      <div>
        <FavoriteButton
        />
        <img src={image}></img>
        <h2>{artist}</h2>
      </div>
    );
  }