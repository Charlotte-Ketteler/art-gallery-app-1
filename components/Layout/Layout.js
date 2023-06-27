import  Navbar from "../Navbar/Navbar.js";

export default function Layout({ children }){
    return (
        <>
            {children}
             <Navbar/>
        </>
    );
}