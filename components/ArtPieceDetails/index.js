export default function ArtPiecesDetails({
    image,
    title,
    artist,
    year,
    genre,
  }){

  return (
    <div>
        <button type="button" onClick={onBack} aria-label="navigate back">
        ←
        </button>
        <image src={image}></image>
        <ul>
            <li>{title}</li>
            <li>{artist}</li>
            <li>{year}</li>
            <li>{genre}</li>
        </ul>
    </div>
  )
}