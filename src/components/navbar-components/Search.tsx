
export const Search = () => {
    return (
        <div className="relative my-auto w-100">
            <span className="absolute right-3 top-3 flex items-center pr-1 text-gray-500">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" className="bg-white rounded-full py-2 px-4 pr-10 w-full" placeholder="Search here..."></input>
        </div>
    )
}
