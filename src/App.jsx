import { useState, useEffect } from 'react'
import EmblaCarousel from "./sections/Carousel/EmblaCarousel"
import Header from "./sections/Header"
import Description from './sections/Description'
import { fetchApodRange } from './api/nasa'

const App = () => {

  const [apodData, setApodData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(4)
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

  const currentApod = apodData?.[currentIndex] || null

  console.log(apodData)
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header emblaApi={emblaApi} currentApod={currentApod}/>
      <EmblaCarousel slides={apodData} onApiReady={setEmblaApi}/>
      <Description description={currentApod}/>
      <div className='flex justify-end p-6'>
        <img src="/logo.png" alt="NASA logo" />
      </div>
    </div>
  )
}

export default App