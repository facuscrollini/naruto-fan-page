import { Link } from "react-router"

export const HomeButton = () => {
    return (
        <Link to="/">
            <button className="bg-green-300 m-3 px-2 py-1 hover:cursor-pointer rounded-full absolute offset-2" type="button">
                <img className="w-30 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_Naruto_Shipp%C5%ABden.svg/2560px-Logo_Naruto_Shipp%C5%ABden.svg.png"/>
            </button>
        </Link>
    )
}
