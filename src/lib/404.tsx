import Link from "next/link"
import NavBar from "./NavBar/NavBar"

const Error404 = () => {
    return (
        <>
            <NavBar />
            <h1>OOPS!</h1>
            <h3>Error 404: Page does not exist.</h3>
            <Link href="/" passHref>Click here to return to the homepage.</Link>
        </>
    )
}

export default Error404