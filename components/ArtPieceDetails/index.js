import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

const ColorPaletteContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 25%;
  padding: 10px;
  justify-content: space-between;
`;

const ColorPalette = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export default function ArtPiecesDetails({ imageSource: image,
  slug,
  name: title,
  artist: name,
  year,
  genre,
  colors,
  isFavorite,
  onToggleFavorite, }) {

    const router = useRouter();
    return (
      <div>
        <button onClick={() => router.back()}>go back</button>
        <h2>
          {title} ({year})
        </h2>
        <p>{genre}</p>
        <ColorPaletteContainer>
        Colors used:
        {colors.map((color) => (
          <ColorPalette key={color} color={color} aria-label={color} />
        ))}
      </ColorPaletteContainer>
        <Image src={image} width={480} height={608} alt={title} />
        <div>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(slug)}
          />
        </div>
        <p>by {name}</p>
      </div>
    );
  }