import styled from "styled-components";
 import FavoriteButton from "../FavoriteButton/index.js";

const Body = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;

`;

const ImageContainer = styled.section`
position: relative;
display: flex;
align-items: center;
height: 350px;
width 200px;
background-color: beige;
margin-left: 20%;

`;

  export default function Spotlight({image, artist}){
    
    return(
<Body>

<ImageContainer>
<FavoriteButton/>
</ImageContainer>
<h2>FamousArtist</h2>
</Body>
    );
  }