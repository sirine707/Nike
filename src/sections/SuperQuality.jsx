import { shoe8 } from "../assets/images"
import {Button} from "../components"
const SuperQuality = () => {
  return (
    <section 
    id="about-ud"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
        We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
      
      <div className="mt-11">
        <Button label="View Details"/>
      </div>
      </div>
      <div className="flex flex-1 justify-center 
      items-center flex-col 
      max-container">
        <img src={shoe8}
        alt="shoe8"
        width={500}
        height={500}
        />
      </div>
    </section>
  )
}

export default SuperQuality
