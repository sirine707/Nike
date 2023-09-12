import { Button } from "../components"
import { offer } from "../assets/images"
const SpecialOffer = () => {
  return (
    <section className=''>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      
      <div className="mt-11 gap-4 flex flex-wrap">
        <Button label="View Details"/>
       <Button label="Learn more"
       backgroundColor='bg-white'
       textColor='text-slate-500'
       borderColor='border-slate-500'
       />
      </div>
      </div>

    </section>
  )
}

export default SpecialOffer
