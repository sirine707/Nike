import {star} from "../assets/icons"
const PopularProductCard = ({imgURL,
    name, price}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full  items-center">
        <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"/>

    
    <div className="flex gap-4">
        <img src={star}
        alt="rating"
        width={24}
        height={24}/>
        <p className="font-montserrat text-xl leading-normal ">4.5</p>
    </div>
    <h3 className="text-2xl font-palanquin
    leading-normal font-semibold">{name}</h3>
    <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>

  )
}

export default PopularProductCard
