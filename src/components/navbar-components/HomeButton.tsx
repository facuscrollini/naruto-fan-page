import { Link } from "react-router"

export const HomeButton = () => {
    return (
        <Link to="/">
            <button className="bg-green-300 rounded m-3 px-2 py-1 hover:cursor-pointer" type="button">Home</button>
        </Link>
    )
}
