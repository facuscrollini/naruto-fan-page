import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

export type CatalogMenuType = {
    openMenu:string | undefined,
    setOpenMenu: Dispatch<SetStateAction<string |undefined>>,
    type: string
}

export const CatalogListNavbarElement = ({openMenu, setOpenMenu, type}:CatalogMenuType) => {

  const [thisMenu, setThisMenu] = useState(false)
  const titleType = type.charAt(0).toUpperCase() + type.slice(1)
 
  const handleClick = () => {
    openMenu == type ? setOpenMenu(undefined) : setOpenMenu(type)
  }

  useEffect(() => {
    setThisMenu(openMenu == type)
  })


  return (
    <div className={` ${thisMenu ? "flex-grow lg:min-w-[3rem]" : "lg:w-[3rem] lg:h-[3rem] max-lg:h-[2rem] max-lg:w-[2rem]"} transition-all duration-1000 h-[3vh]`}>
      <div className={`relative overflow-hidden w-full lg:rounded-lg max-lg:rounded-md h-full bg-gray-100 transition-all duration-1000`} >
        {type == "search" ? 
        
        <input type="text" placeholder={`Search here...`}
        className={`absolute h-full w-[90%] pl-[1vw] left-[vw] ${thisMenu ? "block" : "hidden"} transition-all duration-1000`}
        >
        </input>
        :
         <p className={`${thisMenu ? "block w-full text-center" : "hidden"} transition-all duration-1000`}
        >{titleType}</p>
        }
        <button type="button"
          title="Customize your list"
          className={`hover:cursor-pointer absolute z-1 lg:w-[3rem] max-lg:w-[2rem] h-full bg-red-400 top-0 right-0  hover:scale-120 transition-all duration-500`}
          onClick={handleClick}
        >
          <i className={`fa-solid fa-${type == "search" ? type : type == "filter" ? "sliders" : "table-cells-large"}`}></i>
        </button>
      </div>
    </div>
  )
}
