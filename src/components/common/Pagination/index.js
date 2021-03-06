
const Pagination = () => {
    return (
<div className="container mx-auto px-4 mb-52">
  <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
    <span className="flex w-44 h-44 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Previous Page">
        <span className="sr-only">Previous Page</span>
        <svg className="block w-16 h-16 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
        </svg>
    </span>
        <span className="hidden md:flex w-44 h-44 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 1">
            1
        </span>
        <span className="hidden md:flex w-44 h-44 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 2">
            2
        </span>
        <span className="hidden md:flex w-44 h-44 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none" href="#" aria-current="page" title="Page 3">
            3
        </span>
        <span className="hidden md:flex w-44 h-44 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 4">
            4
        </span>
        <span className="hidden md:flex w-44 h-44 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 5">
            5
        </span>
        <span className="flex w-44 h-44 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Next Page">
        <span className="sr-only">Next Page</span>
        <svg className="block w-16 h-16 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
        </svg>
    </span>
  </nav>
</div>
    )
}

export default Pagination;