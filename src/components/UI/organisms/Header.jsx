import React from 'react'
import Search from '../Molecules/Search'

function Header() {
    return (
        <>
            <header className='layout bg-white mt-6'>
                <div className='flex items-center justify-between py-6'>

                    <div>
                        <h1 className='text-gray-900 text-xl font-semibold'>My First React App</h1>
                    </div>

                    <div>
                        <Search />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header