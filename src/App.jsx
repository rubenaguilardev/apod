import { useState, useEffect } from 'react'
import EmblaCarousel from "./sections/Carousel/EmblaCarousel"
import Header from "./sections/Header"
import Description from './sections/Description'
import { fetchApodRange } from './api/nasa'

const App = () => {

  const [apodData, setApodData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [emblaApi, setEmblaApi] = useState(null)


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApodRange()
        setApodData(data)
      } catch(err) {
        console.error(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
  if (!emblaApi) return

    const handleSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', handleSelect)
    return () => {
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi])

  const currentApod = apodData?.[currentIndex] || null

  

  console.log(apodData)
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header emblaApi={emblaApi} currentApod={currentApod}/>
      <div className='relative'>
        <EmblaCarousel slides={apodData} onApiReady={setEmblaApi}/>
        {currentApod && (
      <div className='absolute top-1/2 right-11 -translate-y-1/2 bg-black/20 backdrop-blur-sm px-3 py-6 rounded-lg flex flex-col items-center'>
        {currentApod.date.split('-').reverse().join('·').split('').map((char, i) => (
          <span key={i} className='orbitron text-2xl text-muted font-semibold py-1 px-6'>
            {char}
          </span>
        ))}
      </div>
)}
      
      </div>
      
      <Description data={currentApod}/>
      <div className='flex justify-end p-4 h-22 mt-5'>
        <img src="/logo.png" alt="NASA logo" />
      </div>
    </div>
  )
}

export default App