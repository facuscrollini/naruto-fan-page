import { useState } from "react"
import { CategoriesButton } from "./CategoriesButton"

export const CategoriesMenu = () => {

    const listOfCatalogs = [
        {
            type: "characters",
            title: "Characters"
        },
        {
            type: "akatsukis",
            title: "Akatsukis"
        },
        {
            type: "villages",
            title: "Villages"
        },
        {
            type: "clans",
            title: "Clans"
        },
        {
            type: "teams",
            title: "Teams"
        },
        {
            type: "tailed beasts",
            title: "Tailed Beasts"
        },
        {
            type: "kekkei genkai",
            title: "Kekkei Genkai"
        },

    ]

    const [dropDown, setDropDown] = useState<boolean>(false)

    const handleDropDown = () => {
        setDropDown(!dropDown)
    }


    return (
        <div onClick={handleDropDown} className="w-40 relative">
            <button className={`relative bg-rose-800 text-rose-200 p-2 pr-14 w-full mt-2 ${dropDown ? "rounded-t-3xl" : "rounded-3xl"}`} type="button">Categories <span className="absolute right-5">
                <i className={`fa-solid fa-angle-${dropDown ? "down" : "up"}`}></i>
            </span></button>

            <div className={`${dropDown ? "block" : "hidden"} flex flex-col absolute  rounded-b-3xl w-full overflow-hidden `}>
                <ul>

                    {listOfCatalogs.map((element, index) => {

                        return (
                            index == 0 ?
                                (
                                    <li >
                                        <CategoriesButton  key={index} type={element.type} title={element.title} />
                                    </li>
                                ) :
                                (
                                    <li className="border-t-orange-100 border-t-1 ">
                                        <CategoriesButton  key={index} type={element.type} title={element.title} />
                                    </li>
                                )
                        )

                    })}
                </ul>
            </div>
            <div className="hidden">Hola</div>
        </div>
    )
}