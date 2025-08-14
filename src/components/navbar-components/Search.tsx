
export const Search = () => {
    return (
        <div className="relative my-auto">
            <span className="absolute right-0 top-2 flex items-center pr-1 text-gray-500">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" className="bg-white rounded py-1 px-2 pr-10" placeholder="Search here..."></input>
        </div>
    )
}
