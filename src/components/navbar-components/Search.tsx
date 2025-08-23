import { useEffect, useState, type ChangeEventHandler } from "react"
import { useNaruto } from "../../hooks/useContext/useNaruto"
import type { CharacterType } from "../../services/apiTypes"

export const Search = () => {

    const [search, setSearch] = useState<string>("")
    const { store } = useNaruto()
    const [listFounded, setListFounded] = useState<CharacterType[]>([])
    const [founded, setFounded] = useState<boolean>(false)


    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)
    }



    const searcher = (word: string) => {

        const listCharacters = store.characters ?? []
        const results = listCharacters?.filter(element => element.name.toLowerCase().includes(word.toLowerCase()))
        setListFounded(results)
        setFounded(true)
    }

    const cleanListFounded = () =>{
        setSearch("")
     
    }

    useEffect(() => {
        searcher(search.trim())
        search.trim() == "" ? (setListFounded([]), setFounded(false)) : setFounded(true)

    }, [search])

   

    return (
        <div className="relative  h-full m-auto w-3/4 text-2xl">
            <button type="button" className="hover:cursor-pointer absolute top-1/2  right-3 -translate-y-1/2 flex items-center pr-1 text-gray-500">
                
                <i className={`fa fa-${founded ? "xmark" : "search"}`} title={founded ? "Erase" : "Search"} onClick={()=>{
                    founded && cleanListFounded()
                }} aria-hidden="true"></i>
            </button>

            <input value={search}
                onChange={handleChange}
                type="text"
                className={`h-full outline-none text-gray-700 bg-white  ${listFounded.length > 0 ? "rounded-t-4xl" : "rounded-full"} py-2 px-4 pr-10 w-full`}
                placeholder="Search here..."
            />
            { listFounded.length > 0 && 

                <div className="absolute w-full rounded-b-3xl border-t-1 border-gray-200 overflow-hidden  z-10">

                <div className={` relative w-full flex flex-col `}>
                    <ul className={`bg-white w-full overflow-y-auto ${listFounded.length > 10 ? "h-50" : listFounded.length > 5 ? "h-30" : listFounded.length > 0 && "h-20"}`}>
                        {listFounded?.map((character) => {
                            return (
                                
                                <>
                                    <li className="p-2 hover:bg-cyan-100">
                                        {character.name}
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                    {listFounded.length > 0 && (
                        <>
                            <span className="bg-gray-100 pl-4 text-gray-500  p-2 bottom-0 z-10"><p>{listFounded.length} result{listFounded.length > 1 && "s"} founded</p></span>
                        </>
                    )}

                </div>
            </div>
            }
        </div>
    )
}
