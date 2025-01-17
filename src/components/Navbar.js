import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <ul className='gap-32 text-2xl pt-8 flex flex-col'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Chi sono</a></li>
                <li><a href='#'>Progetti</a></li>
            </ul>
        </div>
    )
}

export default Navbar
