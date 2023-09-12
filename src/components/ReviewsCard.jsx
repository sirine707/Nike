import { star } from "../assets/icons"


const ReviewsCard = ({
    imgURL,
    customerName,
    rating,
    feedback
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
        src={imgURL}
        alt="customer"
        width={150}
        height={150}
        className="rounded-full object-cover w-[120px] h-[120px] "/>
        <p className="info-text text-center  max-w-sm  mt-4">{feedback}</p>
        
        <div className="flex gap-3 mt-1">
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
        
      
    </div>
  )
}

export default ReviewsCard
