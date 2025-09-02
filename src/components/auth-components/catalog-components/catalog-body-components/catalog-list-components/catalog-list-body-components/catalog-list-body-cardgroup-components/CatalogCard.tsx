type Props = {
  name: string,
  image: string | undefined
}

export const CatalogCard = ({ name, image }: Props) => {


  return (
    <div className="text-center">
      <div className="">

        <img src={image && image} hidden={image ? false : true}className="w-full max-lg:h-12 lg:h-15 2xl:h-20 object-cover rounded-full  shadow-md shadow-gray-700/50" />
      </div>
      {name}</div>
  )
}
