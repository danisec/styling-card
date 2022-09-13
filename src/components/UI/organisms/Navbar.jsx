import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="layout bg-gray-100">
                <div className='py-8 flex items-center justify-between'>

                    <div>
                        <ul className='flex gap-10'>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/">Home</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/features">Features</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/faq">FAQs</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/about">About</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className='flex gap-10'>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/login">Login</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 text-base font-semibold' href="/signup">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar