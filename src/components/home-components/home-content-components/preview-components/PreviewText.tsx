
interface Props {
  title?: string,
  description?: string
}

export const PreviewText = ({ title, description }: Props) => {
  return (
    <>
      <p className="md:text-left text-center mb-2 max-sm text-[3vh] sm:text-[5vh] lg:text-[10vh]">{title}</p>
      <p className="max-md:text-center max-sm:text-[1.4vh]">{description}</p>
    </>
  )
}
