import type { NarutoStoreType } from "../../context/narutoContext";
import { CategoriesButton } from "./CategoriesButton"

type Props = {
    dropDown: boolean;
    setDropDown: (arg1:boolean) => void
}

type ListOfCatalogsType = {
    type: keyof NarutoStoreType,
    title: string,
    image: string,
    description:string
}

export const listOfCatalogs: ListOfCatalogsType[] = [
    {
        type: "characters",
        title: "Characters",
        image: "https://wallpapers.com/images/hd/naruto-team-7-1920-x-1200-9qfquisklvz5ylq9.jpg",
        description: "Ninjas rise above limits, carrying dreams, rivalries, and burdens. Some seek to become village leaders, others struggle with vengeance and redemption. Healers, warriors, and tacticians all leave unforgettable marks on this world."
    },
    {
        type: "akatsuki",
        title: "Akatsuki",
        image: "",
        description: "A secretive group operates in the shadows, pursuing power and shaping the balance of the world. Their motives are mysterious, their presence feared, and their actions often bring chaos and challenge to every village."
    },
    {
        type: "villages",
        title: "Villages",
        image: "https://wallpapers.com/images/hd/naruto-village-1920-x-1005-wallpaper-xgq1nv8lja5pit4q.jpg",
        description: "Step into a world where ninjas, clans, and extraordinary powers shape the fate of nations. Discover the secrets behind each hidden village, from forests to deserts, icy lands, stormy mountains, and rocky fortresses."
    },
    {
        type: "clans",
        title: "Clans",
        image: "https://i.redd.it/how-is-the-uchiha-clan-not-inbred-to-all-v0-dmni9pp7e7qc1.png?width=1080&format=png&auto=webp&s=c154a6b7d8192f59b059974349a61ce01fe424af",
        description: "Families with unique abilities and traditions shape villages and pass down secret techniques. Their influence affects combat, politics, and the balance of power across nations."
    },
    {
        type: "teams",
        title: "Teams",
        image: "https://preview.redd.it/c0d46g77ppz31.jpg?width=640&crop=smart&auto=webp&s=e89d605fe441f7d40487d214f532b9f4e702f025",
        description: "From small squads of ninjas to elite units and tactical groups, teams form to achieve missions, protect villages, or pursue larger goals. Collaboration, strategy, and loyalty define their success, while rivalries and conflicts test their strength."
    },
    {
        type: "tailed-beasts",
        title: "Tailed Beasts",
        image: "https://narutoversity.wordpress.com/wp-content/uploads/2015/07/young-tailed-beasts-1.png",
        description: "Immense creatures wield incredible power, influencing villages, warriors, and wars. Uncovering their secrets is a challenge only the bravest dare to face."
    },
    {
        type: "kekkei-genkai",
        title: "Kekkei Genkai",
        image:"https://i.redd.it/s7t1tlk47okb1.jpg",
        description: "Rare powers run in certain families, from extraordinary vision and perception to controlling natural elements. These abilities define the path and destiny of their inheritors."
    },

]
export const CategoriesMenu = ({dropDown, setDropDown}:Props) => {



    const handleDropDown = () => {
        setDropDown(!dropDown)
    }


    return (
        <div onClick={handleDropDown} className="w-40 relative">
            <button className={`relative bg-rose-800 border-rose-900 border-3 text-rose-200 p-2 pr-14 w-full ${dropDown ? "rounded-t-3xl" : "rounded-3xl"} transition-all duration-200 hover:cursor-pointer hover:bg-rose-700 active:bg-rose-900`} type="button">Categories <span className="absolute right-5">
                <i className={`fa-solid fa-angle-${dropDown ? "down" : "up"}`}></i>
            </span></button>

            <div className={`${dropDown ? "block" : "hidden"} flex flex-col absolute  rounded-b-3xl w-full overflow-hidden border-x-3 border-b-3 border-orange-200 z-2`}>
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
                                    <li className="border-t-orange-200 border-t-1  ">
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