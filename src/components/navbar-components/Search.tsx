import { useEffect, useState, type ChangeEventHandler } from "react"
import { useNaruto } from "../../hooks/useContext/useNaruto"
import { listOfCatalogs } from "./CategoriesMenu"
import type { NarutoStoreType } from "../../context/narutoContext"

export const Search = () => {


    //Types


    type CatalogType = keyof NarutoStoreType

    //List Founded Types

    type FoundedItem = {
        name?: string,
        id?: number,
        type?: string
    }



    //States and external elements
    const [search, setSearch] = useState<string>("")
    const { store } = useNaruto()
    const [listFounded, setListFounded] = useState<FoundedItem[]>([])
    const [founded, setFounded] = useState<boolean>(false)
    let elementsFounded = 0


    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)
    }



    const searcher = (word: string) => {
        setListFounded([])
        // const listCharacters = store.characters ?? []

        listOfCatalogs.forEach((catalog) => {

            const catalogType = catalog.type as CatalogType
            const catalogTitle = catalog.title
            const list = store[catalogType] ?? []
            const founded = list.filter(element => element.name.toLowerCase().includes(word.toLowerCase()))
            founded.forEach((element, index) => {
                if (index == 0) {
                    setListFounded(prev => [...prev, { name: catalogTitle }, { name: element.name, id: element.id, type: catalogType }])
                }
                setListFounded(prev => {
                    const exists = prev.some(el => el.id == element.id && el.type == catalogType || el.name === element.name)
                    if (exists) return prev
                    return [...prev, { name: element.name, id: element.id, type: catalogType }]
                })

                setFounded(true)
            })
        })
    }

    const cleanListFounded = () => {
        setSearch("")

    }

    useEffect(() => {
        searcher(search.trim())
        search.trim() == "" ? (setListFounded([]), setFounded(false)) : setFounded(true)

    }, [search])



    return (
        <div className="relative h-full m-auto w-3/4  text-[1.5vh]">

            <div className={`relative h-full px-5 bg-zinc-50 ${listFounded.length > 0 ? "rounded-t-4xl" : "rounded-full"}`}>

                <button type="button" className="hover:cursor-pointer absolute top-1/2  right-5 -translate-y-1/2 flex items-center pr-1 text-gray-500">

                    <i className={`fa fa-${founded ? "xmark" : "search"}`} title={founded ? "Erase" : "Search"} onClick={() => {
                        founded && cleanListFounded()
                    }} aria-hidden="true"></i>
                </button>

                <input value={search}
                    onChange={handleChange}
                    type="text"
                    className={`h-full outline-none text-gray-700   py-2 px-4 pr-10 w-full `}
                    placeholder="Find your character, clan, village, team, etc..."
                />

            </div>

            {listFounded.length > 0 &&




                <div className="absolute w-full rounded-b-3xl border-t-1 border-gray-200 overflow-hidden z-10  ">

                    <div className={` relative w-full flex flex-col `}>
                        <ul className={`bg-white w-full overflow-y-auto ${listFounded.length > 10 ? "h-50" : listFounded.length > 5 ? "h-30" : listFounded.length > 0 && "h-20"}`}>
                            {listFounded?.map((character) => {
                                const catalogMatch = listOfCatalogs.find(catalog => catalog.title == character.name)
                                if (!catalogMatch) elementsFounded++
                                return (

                                    <>
                                        {catalogMatch ?
                                            <li className="text-center bg-gray-200 mb-2 py-1 text-gray-400 text-bold rounded-b-xl">{character.name}</li>
                                            :
                                            <li className="p-2 hover:bg-cyan-100">
                                                {character.name}
                                            </li>

                                        }
                                    </>
                                )
                            })}
                        </ul>
                        {listFounded.length > 0 && (
                            <>
                                <span className="bg-gray-100 pl-4 text-gray-500  p-2 bottom-0 z-10"><p>{elementsFounded} total element{listFounded.length > 1 && "'s"} founded</p></span>
                            </>
                        )}

                    </div>
                </div>
            }
        </div>
    )
}
