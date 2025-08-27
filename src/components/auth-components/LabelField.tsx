
type Props = {
    name:string,
    title:string
}

export const LabelField = ({name, title}:Props) => {
  return (
     <label className="block" htmlFor={name}>{title}</label>
  )
}
