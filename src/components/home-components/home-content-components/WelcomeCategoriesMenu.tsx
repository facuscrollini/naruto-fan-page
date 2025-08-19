import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { listOfCatalogs } from "../../navbar-components/CategoriesMenu"
export const WelcomeCategoriesMenu = () => {

  const { catalog, changeCatalog } = useAuth()
  const [position, setPosition] = useState<number>(3)
  const [prevPosition, setPrevPosition] = useState(position -1)
  const [nextPosition, setNextPosition] = useState(position + 2)
  const elementos = ["A", "B", "C", "D", "E", "F"]
  const [catalogCarrousel, setCatalogCarrousel] = useState(elementos.slice(prevPosition, nextPosition))
  const swtichCatalog = (type: string, index: number) => {

    catalog == type ? changeCatalog("") : changeCatalog(type)
    position == index ? setPosition(7) : setPosition(index)
  }




  useEffect(() => {
    console.log(catalogCarrousel)
    position < 7 && changeCatalog(listOfCatalogs[position].type)
  }, [position])


  useEffect(()=>{
  //                     p-1  p p + 2
  //                    0 , 1 , 2 ,3
console.log(elementos.slice(0,3))
  }, [])

  return (
    <div className=" text-center">
      <div className="bg-gray-900 p-3 rounded-3xl sm:h-20  ">

        <div className="grid 2xl:grid-cols-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-2">

          {/* {
            listOfCatalogs.map((element, index) => (
              <div key={index} className={`relative transform  transition-all duration-500 ${catalog == element.type ? "md:scale-150 scale-110 md:translate-y-4 z-10" : "z-0"}`}>
                <button onClick={() => {

                  swtichCatalog(element.type, index)
                }
                } className={`bg-gray-400 ${position != index ? "brightness-30" : "brightness-100"} rounded-lg py-0 px-3 w-full min-h-10 sm:min-w-50`}>{element.title}</button>
              </div>

            ))
          }
           */}
          {
           catalogCarrousel.map((elemento) => (
              <div className="text-white">{elemento}</div>
            ))
          }
        </div>
      </div>


      <button onClick={() => setPosition(prev => position > 0 ? prev - 1 : 6)} className="mr-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-left"></i></button>
      <button onClick={() => setPosition(prev => position < 6 ? prev + 1 : 0)} className="ml-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-right"></i></button>
    </div>


  )
}
