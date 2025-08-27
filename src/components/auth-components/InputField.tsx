
type Props = {
    name:string,
    type:string
}

export const InputField = ({name, type}:Props) => {
  return (
   <input id={name} name={name} type={type} className="border-2 rounded-sm focus:border-0 border-blue-300"></input>
  )
}
