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
      <EmblaCarousel slides={apodData} onApiReady={setEmblaApi}/>
      <Description data={currentApod}/>
      <div className='flex justify-end p-4 h-22 mt-5'>
        <img src="/logo.png" alt="NASA logo" />
      </div>
    </div>
  )
}

export default App