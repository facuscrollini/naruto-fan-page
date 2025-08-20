import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { listOfCatalogs } from "../../navbar-components/CategoriesMenu"
export const WelcomeCategoriesMenu = () => {

  const { catalog, changeCatalog } = useAuth()
  const [position, setPosition] = useState<number>(3)
  const [carrousel, setCarrousel] = useState(listOfCatalogs.slice(2, 5))

  const swtichCatalog = (type: string, index: number) => {
    catalog == type ? changeCatalog("") : changeCatalog(type)
    position == index ? setPosition(4) : setPosition(index)
  }

  const showTheIndex = (index: number) => {
    console.log(index)
  }

  const decreasePosition = () =>{
    setPosition(prev => position > 0 ? prev - 1 : 6)
  }

  const increasePosition = () =>{
    setPosition(prev => position < 6 ? prev + 1 : 0)
  }


  useEffect(() => {
    position < 7 && changeCatalog(listOfCatalogs[position].type)
    position == 6 ? setCarrousel([...listOfCatalogs.slice(-2), ...listOfCatalogs.slice(0, 1)]) : position == 0 ? setCarrousel([...listOfCatalogs.slice(-1), ...listOfCatalogs.slice(0, 2)]) : setCarrousel(listOfCatalogs.slice(position - 1, position + 2))
    console.log("position desde el useEffect es " + position)
  }, [position])




  return (
    <div className=" text-center">
      <div className="bg-gray-900 p-3 rounded-3xl sm:h-20  ">

        <div className="grid 2xl:grid-cols-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-2">

          {
            carrousel.map((element, index) => (
              <div key={index} className={`relative transform  transition-all duration-500 ${index == 1 ? "md:scale-150 scale-110 md:translate-y-4 z-10" : "z-0"}`}>
                <button onClick={() => {
                 swtichCatalog(element.type, index)
                 index == 0 ? setPosition(prev => prev + 1) : index > 1 && setPosition(prev => prev -1) 
                }
                } className={`bg-gray-400 rounded-lg py-0 px-3 w-full min-h-10 sm:min-w-50`}>{element.title}</button>
              </div>

            ))
          }


        </div>
      </div>


      <button onClick={() => decreasePosition()} className="mr-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={() => decreasePosition()} className="ml-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-right"></i></button>
    </div>


  )
}
