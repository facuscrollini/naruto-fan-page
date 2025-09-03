import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"
import { CatalogCard } from "./catalog-list-body-cardgroup-components/CatalogCard"

type Props = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  quantityOfPages: number,
  setQuantityOfPages: Dispatch<SetStateAction<number>>
}


export const CatalogCardGroup = ({ page, setPage, setQuantityOfPages }: Props) => {

  //I create an array that contains all images for villages by objects
  const villages = [
    { id: 0, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899385/1000_muunvc.png" },
    { id: 1, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809102/1000_j2frzo.png" },
    //no image id 
    { id: 2, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png" },
    { id: 3, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809468/1000_s5vvdf.png" },
    //no image id 4
    { id: 4, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png" },
    { id: 5, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899008/1000_qwulmi.png" },
    { id: 6, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809736/1000_dyx590.png" },
    { id: 7, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809795/1000_jlgqu1.png" },
    { id: 8, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809859/259_xs8924.png" },
    //no image id 9
    { id: 9, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809859/259_xs8924.png" },
    { id: 10, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809984/latest_imlh50.png" },
    { id: 11, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810004/1000_kisyg1.jpg" },
    { id: 12, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810098/1000_ffvyoz.png" },
    { id: 13, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810152/latest_fjkr9i.png" },
    { id: 14, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756810174/latest_xw5ngo.png" },
    //no image id 15
    { id: 15, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png" },

    { id: 16, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756899566/latest_zz2wi9.png" },
    { id: 17, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900773/1000_xlh3tn.png" },
    { id: 18, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900786/1000_n6owoz.png" },
    { id: 19, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900835/latest_kqzflh.png" },
    { id: 20, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900884/320_x0pth7.png" },
    { id: 21, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901097/320_nfxrke.png" },
    { id: 22, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900986/1000_rzydbu.png" },
    { id: 23, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756900978/1000_jvgbbr.png" },
    { id: 24, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901328/latest_kwvjdf.jpg" },
    { id: 25, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901483/dec98-16651481780318_cgt9ju.jpg" },
    { id: 26, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756809451/2878_f5ds8x.png" },
    { id: 27, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901805/1000_hxcjja.jpg" },
    { id: 28, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901888/1000_ecccxi.png" },
    { id: 29, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901939/1000_duzyh1.png" },
    { id: 30, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756901965/1000_un0oms.png" },

    { id: 31, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902508/223_cfkeoh.jpg" },
    { id: 32, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902033/1000_rbpwig.png" },
    { id: 33, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902056/1000_qakqqg.png" },
    { id: 34, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902550/latest_x7ljsa.jpg" },
    { id: 35, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902594/1000_hscqyg.png" },
    { id: 36, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902645/1000_i3ku7y.png" },
    { id: 37, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902721/latest_xjjfvt.jpg" },
    { id: 38, image: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756902791/latest_jnhfbg.png" }

  ]
  const quantityPerPage = 16

  const { store } = useNaruto()
  const { catalog } = useAuth()



  const createListForCatalog = (from: number, to: number) => {
    return store[catalog!]?.slice(from, to)
  }

  const [listItems, setListItems] = useState(createListForCatalog(0, quantityPerPage))


  useEffect(() => {
    if (page != 1) {
      setListItems(createListForCatalog(quantityPerPage * (page - 1), quantityPerPage * page))
      return
    }
    setListItems(createListForCatalog(0, quantityPerPage))

  }, [page])


  useEffect(() => {
    setListItems(createListForCatalog(0, quantityPerPage))
    setQuantityOfPages(Math.ceil(store[catalog!]?.length! / quantityPerPage))
    setPage(1)
  }, [catalog])


  //I'm gonna use the useEffect to show all the listItems items everytime it changes
  //There are 15 positions on village catalog
  useEffect(() => { console.log(listItems) }, [listItems])


  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-[2rem] gap-2 mx-[2rem] h-[45vh] overflow-auto">
      {listItems && listItems.map((item, index) => {

        const image = "images" in item
          ? item.images[0]
          : (villages.find(el => el.id == item.id)?.image)

        return <CatalogCard key={index} image={image} name={item.name} />
      })}

    </div>
  )
}
