import { Link } from "react-router"


type Props = {
    dropDown: boolean
    setDropDown: (arg1: boolean) => void
}

export const HomeButton = ({dropDown, setDropDown}:Props) => {



    return (
        <Link to="/">
            <button onClick={()=> dropDown && setDropDown(!dropDown)} className="bg-cyan-100 active:bg-cyan-200 m-3 px-3 pt-1 pb-2 hover:cursor-pointer rounded-b-4xl absolute left-40 -top-3 border-cyan-900 border-t-0 border-x-1 border-b-4 hover:scale-104 transform transition-transform duration-300 " type="button">
                <img className="w-30 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_Naruto_Shipp%C5%ABden.svg/2560px-Logo_Naruto_Shipp%C5%ABden.svg.png"/>
            </button>
        </Link>
    )
}
