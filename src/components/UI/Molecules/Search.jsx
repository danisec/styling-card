import React from 'react'

function Search() {
    return (
        <>
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search" class="bg-gray-50 border border-gray-200 text-gray-700 text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 pl-10" placeholder="Search..." />
                </div>
            </form>
        </>
    )
}

export default Search