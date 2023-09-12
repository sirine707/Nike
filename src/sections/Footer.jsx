import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div>
        <a >
          <img
          src={footerLogo}
          alt="logo"
          width={100}
          height={100}
          className="mt-0"
          />

        </a>
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-s ">
        Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
        </p>
        <div className="flex mt-8 gap-5 flex-start cursor-pointer">
          {
            socialMedia.map((item)=>(
              <div key={item}
              className="bg-white
              rounded-full w-12 h-12 flex justify-center items-center gap-5">
              <img
              src={item.src}
              alt={item.alt}
              width={25}
              height={25}
              />
            </div>
            ))

          }
        </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap mt-6 gap-5 lg:gap-10">
          {
            footerLinks.map((section)=>(
              <div key="section">
                <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="text-info text-slate-400 
                ">
                  {
                    section.links.map((link)=>(
                      <li key={link.name}
                      className="mt-2 ">
                        {link.name}
                      </li>
                    ))
                  }
                  
                </ul>
              
              </div>
            )
            )
          }

        </div>
        <div className="text-white flex flex-row justify-between mt-24 max-sm:flex-col max-sm:items-center  ">
          <div className="flex flex-1  gap-2 mt-6 justify-start items-center  font-montserrat cursor-pointer">
            <img
            src={copyrightSign}
            alt="copy right"
            width={20}
            height={20}
            className="rounded-full "/>
            <p className="">Copyright.All rights reserved</p>
          </div>
          
            <div>
            <p className='font-montserrat cursor-pointer mt-5'>Terms & Conditions</p>
            </div>
          

        </div>
      
    </footer>
  )
}

export default Footer
