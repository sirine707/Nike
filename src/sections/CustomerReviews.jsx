import {ReviewsCard} from "../components"
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section>
      <h3 className='text-3xl font-semibold font-montserrat text-center'>
        What Our 
        <span className='text-red-500'> Customers </span> Say
      </h3>
      <p className='info-text max-w-lg m-auto mt-4 text-center'> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
        <div className="flex flex-1 max-lg:flex-col mt-24 items-center justify-evenly gap-14 ">
          {
            reviews.map((item)=>(
              
                <ReviewsCard
                key={item}
                imgURL={item.imgURL}
                customerName={item.customerName}
                rating={item.rating}
                feedback={item.feedback}

              />
              
              
            ))
          }
        </div>
    </section>
  )
}

export default CustomerReviews
