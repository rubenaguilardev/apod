import { useState, useEffect } from 'react'
import { fetchApod } from '../api/nasa'


const Header = () => {

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
        <div className="flex justify-center py-10">
            <h2 className='orbitron uppercase text-5xl font-bold tracking-widest text-secondary'>
                {title}
            </h2>
        </div>
    )
}

export default Header