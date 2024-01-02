import React from 'react'

const Lines = ({mobilePatterDivider, desktopPatterDivider}) => {
    return (
        <div className='w-full '>
            <img src={mobilePatterDivider} className='md:hidden' alt="Mobile pattern" />
            <img src={desktopPatterDivider} className='w-full hidden md:block' alt="Desktop pattern" />
        </div>
    )
}

export default Lines
