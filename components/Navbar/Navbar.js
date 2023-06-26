import Link from "next/link";

const  Navbar= () => {
    return (  
        <nav>
            <Link href="/spotlight">Spotlight</Link>
            <Link href="/pieces">Pieces</Link>
            <Link href="/favorite">Favorite</Link>
        </nav>
    );
}
 
export default Navbar;