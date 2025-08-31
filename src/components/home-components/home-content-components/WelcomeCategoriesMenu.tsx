import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { listOfCatalogs } from "../../navbar-components/CategoriesMenu"

export const WelcomeCategoriesMenu = () => {

  const { changeCatalog } = useAuth()
  const [position, setPosition] = useState<number>(3)
  const [carrousel, setCarrousel] = useState(listOfCatalogs.slice(2, 5))





  const decreasePosition = () => {
    setPosition(prev => prev > 0 ? prev - 1 : 6)
    changeCatalog(carrousel[0].type)
  }

  const increasePosition = () => {
    setPosition(prev => prev < 6 ? prev + 1 : 0)
    changeCatalog(carrousel[2].type)
  }

  const switchPosition = (index: number) => {
    index == 0 ? decreasePosition() : index == 2 && increasePosition()
  }


  useEffect(() => {
    position == 6 ? setCarrousel([...listOfCatalogs.slice(-2), ...listOfCatalogs.slice(0, 1)]) : position == 0 ? setCarrousel([...listOfCatalogs.slice(-1), ...listOfCatalogs.slice(0, 2)]) : setCarrousel(listOfCatalogs.slice(position - 1, position + 2))
  }, [position])






  return (
    <>
      <div className="sm:bg-blue-950 bg-blue-950/85 sm:px-0 px-[1vh] sm:pt-[2vh] lg:pt-[2.5vh] lg  max-sm:h-full not-sm:flex not-sm:justify-start items-center   mb-5 rounded-lg sm:rounded-full  ">

        <div className="grid grid-cols-1 w-full sm:grid-cols-3 md:grid-cols-5 ">

          {
            carrousel.map((element, index) => (
              <div className={`flex not-sm:my-2 w-full sm:col-span-1 sm:justify-center ${index == 0 ? "sm:justify-end sm:translate-x-[5vh] md:translate-x-0 sm:ml-3 sm:mr-0 md:col-start-2 md:col-end-3" : index == 1 ? "sm:justify-center md:col-start-3 md:col-end-4" : "sm:justify-start sm:-translate-x-[5vh] md:translate-x-0  sm:mr-3 sm:ml-0 md:col-start-4 md:col-end-5"}`}>

                <div key={index} className={`not-sm:w-full relative border-2 border-gray-500 rounded-lg bg-gray-300 w-fit  text-gray-500  transform  transition-all duration-500 ${index == 1 ? "scale-120 sm:scale-140 md:scale-150 sm:translate-y-4 z-5 brigthness-100" : " brightness-50 z-0"}`}>
                  <button onClick={() => {
                    switchPosition(index)
                  }
                  } className={`not-sm:text-[1.5vh] py-0 px-3 w-full min-h-10 sm:min-w-50`}>{element.title}</button>
                  <div className="absolute top-0 left-1 text-[0.9vh]">o</div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-1 text-[0.9vh]">o</div>
                  <div className="absolute bottom-0 left-1 text-[0.9vh]">o</div>

                  <div className="absolute top-0 right-1 text-[0.9vh]">o</div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-1 text-[0.9vh]">o</div>
                  <div className="absolute bottom-0 right-1 text-[0.9vh]">o</div>
                </div>
              </div>

            ))
          }


        </div>
      </div>

      <div className="flex justify-center not-sm:hidden">

        <button onClick={() => decreasePosition()} className="mr-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => increasePosition()} className="ml-2 hover:cursor-pointer hover:text-gray-900 text-gray-600 hover:scale-130 text-3xl transform transition-all duration-200"><i className="fa-solid fa-angle-right"></i></button>
      </div>

    </>


  )
}
