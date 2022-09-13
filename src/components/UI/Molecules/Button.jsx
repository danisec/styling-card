import React, { useState } from 'react'
import Modal from '../organisms/Modal'

function Button({ nameButton }) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <button className='mt-4 bg-blue-500 hover:bg-blue-600 w-40 h-12 rounded-md text-white font-medium' onClick={() => setOpenModal(true)}>{nameButton}</button>
            {openModal && <Modal closeModal={setOpenModal} />}
        </>
    )
}

export default Button