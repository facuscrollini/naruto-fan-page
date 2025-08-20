import { CategoriesButton } from "./CategoriesButton"

type Props = {
    dropDown: boolean;
    setDropDown: (arg1:boolean) => void
}

export const listOfCatalogs = [
    {
        type: "characters",
        title: "Characters",
        image: "https://wallpapers.com/images/hd/naruto-team-7-1920-x-1200-9qfquisklvz5ylq9.jpg",
        description: "Ninjas rise above limits, carrying dreams, rivalries, and burdens. Some seek to become village leaders, others struggle with vengeance and redemption. Healers, warriors, and tacticians all leave unforgettable marks on this world."
    },
    {
        type: "akatsukis",
        title: "Akatsukis",
        image: "data:image/jpeg;base64,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",
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
        type: "tailed beasts",
        title: "Tailed Beasts",
        image: "https://narutoversity.wordpress.com/wp-content/uploads/2015/07/young-tailed-beasts-1.png",
        description: "Immense creatures wield incredible power, influencing villages, warriors, and wars. Uncovering their secrets is a challenge only the bravest dare to face."
    },
    {
        type: "kekkei genkai",
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