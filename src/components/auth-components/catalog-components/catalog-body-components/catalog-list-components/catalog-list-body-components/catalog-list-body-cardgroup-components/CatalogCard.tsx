

type Props = {
  name: string,
  image: string | undefined
}

export const CatalogCard = ({ name, image }: Props) => {



  return (
    <div className="text-center hover:cursor-pointer hover:scale-120 transition-all duration-500" title={name}>
      <img src={image && image} hidden={image ? false : true} className="w-full aspect-square object-cover rounded-full  shadow-md shadow-gray-700/50" />

      <p className="truncate">
        {name}
      </p>
    </div>
  )
}
