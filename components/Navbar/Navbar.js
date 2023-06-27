import Link from "next/link";
//import { useRouter } from "next/router";
const  Navbar= () => {
    //const router = useRouter();

    return (  
        <nav>
            <Link href={`/`} >Spotlight</Link>
            <Link href={`/art-pieces`}>Pieces</Link>
            <Link href={`/favorites`}>Favorites</Link>
        </nav>
    );
}
 
export default Navbar;