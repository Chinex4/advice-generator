import React from 'react'

const AdviceText = ({loading, advice}) => {
    return (
        <div className='w-full flex justify-center'>
            <h1 className='advice text-[28px] font-semibold leading-10'>
                {loading ? 'Loading advice...' : advice.slip.advice}
            </h1>
        </div>
    )
}

export default AdviceText
