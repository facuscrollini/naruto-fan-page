
interface Props {
    type?:string
}

export const PreviewImage = ({type}:Props) => {
  return (
            <img className="w-full h-full transition-all duration-1000 group-hover:grayscale-50 object-cover object-bottom" src={`/img/${type == "kekkei-genkai" ? type + ".jpg" : type + ".png"}`} />
  )
}
