type TypeType = {
    type: string
}

export const CatalogTitle = ({type}:TypeType) =>{
    return (
        <>
        <div>List of {type}</div>
        </>
    )
}