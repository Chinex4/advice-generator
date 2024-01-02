import React from 'react'

const Button = ({fetchAdvice, dice}) => {
    return (
        <div className='w-full grid place-items-center mt-10'>
            <button onClick={fetchAdvice} className='btn-bg absolute w-16 h-16 grid place-items-center rounded-full transition-all focus:outline-none translate-x-[-50%] left-[50%] -bottom-7 md:-bottom-7'>
                <img src={dice} alt="Dice Icon" />
            </button>
        </div>
    )
}

export default Button
