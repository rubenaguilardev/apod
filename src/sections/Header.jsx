import { useState, useEffect } from 'react'
import { PrevButton, NextButton } from './Carousel/EmblaCarouselArrowButtons'


const Header = ({ emblaApi, currentApod }) => {

    return (
        <div className="flex justify-center items-center py-10">
            <h2 className='orbitron uppercase text-4xl font-bold tracking-widest text-secondary'>
                {currentApod?.title || 'APOD Gallery'}
            </h2>

            <div className='embla_buttons flex gap-4 absolute right-5'>
                <PrevButton 
                    onClick={() => emblaApi.scrollPrev()}
                />
                <NextButton 
                    onClick={() => emblaApi.scrollNext()}
                />
            </div>
        </div>
    )
}

export default Header