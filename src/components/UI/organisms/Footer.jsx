import React from 'react'

function Footer() {
    return (
        <>
            <div className='layout bg-white mt-12'>

                <div>
                    <p className='mb-2 text-base text-gray-700 font-medium'>This is My First React App in Tailwind CSS</p>

                    <span className='text-base text-gray-700 font-medium flex flex-row gap-2'>New to Rect?
                        <a className='text-blue-500 underline' href="https://reactjs.org/" target='_blank'>Visit the homepage</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer