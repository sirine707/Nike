import { products } from "../constants";
import PopulatProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-4 ">
      <h2 className="font-bold text-4xl font-palanquin">
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      
      </div>
      <div className="grid mt-16 lg:grid-cols-4 gap-16
      md:grid-cols-3 sm:gap-4
      sm:grid-cols-2 grid-cols-1">
        {
          products.map((product)=>(
            <PopulatProductCard
            key={product.name}
            {...product} />

          )
          )
        }
        
      </div>

    </section>
    
  )
}

export default PopularProducts
