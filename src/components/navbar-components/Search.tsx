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
        <div className="relative my-auto w-100">
            <span className="absolute right-3 top-3 flex items-center pr-1 text-gray-500">
                
                <i className={`fa fa-${founded ? "xmark" : "search"}`} title={founded ? "Erase" : "Search"} onClick={()=>{
                    founded && cleanListFounded()
                }} aria-hidden="true"></i>
            </span>

            <input value={search}
                onChange={handleChange}
                type="text"
                className={` outline-none text-gray-700 bg-white rounded-t-3xl ${listFounded.length > 0 ? "" : "rounded-b-3xl"} py-2 px-4 pr-10 w-full`}
                placeholder="Search here..."
            />
            { listFounded.length > 0 && 

                <div className="absolute w-full rounded-b-3xl overflow-hidden border-2 border-gray-300 z-2">

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
