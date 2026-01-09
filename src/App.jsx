import { useState } from 'react'
import EmblaCarousel from "./sections/Carousel/EmblaCarousel"
import Header from "./sections/Header"
import Description from './sections/Description'

const App = () => {

  const [emblaApi, setEmblaApi] = useState(null)

  const SLIDES = [0, 1, 2, 3, 4]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header emblaApi={emblaApi}/>
      <EmblaCarousel slides={SLIDES} onApiReady={setEmblaApi}/>
      <Description />
    </div>
  )
}

export default App