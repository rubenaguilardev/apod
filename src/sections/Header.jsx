import { useState, useEffect } from 'react'
import { fetchApod } from '../api/nasa'
import { PrevButton, NextButton } from './Carousel/EmblaCarouselArrowButtons'


const Header = ({ emblaApi }) => {
    const [title, setTitle] = useState('Loading...')

    useEffect(() => {
        const getTitle = async () => {
            try {
                const data = await fetchApod()
                setTitle(data.title)
            } catch(err) {
                setTitle('Failed to load')
                console.error(err)
            }
        }
        getTitle()
    }, [])

    return (
        <div className="flex justify-center items-center py-10">
            <h2 className='orbitron uppercase text-5xl font-bold tracking-widest text-secondary'>
                {title}
            </h2>

            <div className='embla_buttons flex gap-4 absolute right-10'>
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