import React, { useEffect, useState } from 'react'
import '../App.css'
import dice from '../assets/icon-dice.svg'
import desktopPatterDivider from '../assets/pattern-divider-mobile.svg'
import mobilePatterDivider from '../assets/pattern-divider-desktop.svg'
import axios from 'axios'
import AdviceText from './AdviceText'
import Lines from './Lines'
import Button from './Button'

const AdviceWrapper = () => {

    const [advice, setAdvice] = useState({
        slip: {
            id: 117,
            advice: "It is easy to sit up and take notice, what's dificult is getting up and taking actions."
        }
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAdvice()

    }, [])

    const fetchAdvice = async () => {
        const url = 'https://api.adviceslip.com/advice'
        try {
            setLoading(true)
            const response = await axios.get(url)
            const data = response.data
            setAdvice(data)
        } catch (error) {
            console.log('Error fetching advice: ', error)
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className='wrapper -mt-32 md:mt-0 relative w-full md:w-[520px] rounded-lg flex flex-col space-y-12 text-center px-6 py-10'>
            <p className='title tracking-widest capitalize text-sm'>Advice #{advice.slip.id}</p>

            <AdviceText loading={loading} advice={advice}/>


            {/* Lines */}
            <Lines mobilePatterDivider={mobilePatterDivider} desktopPatterDivider={desktopPatterDivider
            } />


            {/* Button */}
            <Button fetchAdvice={fetchAdvice} dice={dice} />
        </div>
    )
}

export default AdviceWrapper
