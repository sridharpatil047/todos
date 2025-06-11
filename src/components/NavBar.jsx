import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <Link to='/'>Home | </Link>
            <Link to='/profile'>Profile | </Link>
            <Link to='/products'>Products</Link>
            <hr></hr>
        </>
    )
}

export default NavBar