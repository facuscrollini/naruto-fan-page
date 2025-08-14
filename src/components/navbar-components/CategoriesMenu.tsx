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

    const handleDropDown = () =>{
        setDropDown(!dropDown)
    }


    return (
        <div onClick={handleDropDown}>
            <button type="button">Categories</button>
            {listOfCatalogs.map((element, index) => {
                return (
                    <div className={dropDown ? "block" : "hidden"}>
                        <CategoriesButton className="hidden" key={index} type={element.type} title={element.title} />
                    </div>
                )
            })}
     <div className="hidden">Hola</div>
    </div>
    )
}