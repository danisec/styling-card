import React from 'react'
import Button from '../Molecules/Button'

function Card() {
    return (
        <>
            <div className="layout bg-white mt-6">
                <div className='bg-gray-100 p-12 rounded-md'>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">First Paragraph in Jumbotron</h5>

                    <p className='text-base text-gray-900 font-medium w-7/12'>Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Tailwind. Check out the examples below for how you can remix and restyle it your liking.</p>

                    <Button nameButton={`Example Button`} />
                </div>

                <hr className='mt-6' />

            </div>
        </>
    )
}

export default Card