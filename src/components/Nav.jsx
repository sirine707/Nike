import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x
    py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/" >
                <img src={headerLogo} 
                alt="logo"
                height={29}
                width={130}/>
            </a>
            <ul className="flex items-center justify-center gap-20 max-lg:hidden ">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className=" font-montserrat leading-normal text-lg
                        text-slate-800">
                            {item.label}

                        </a>

                    </li>
                ))}

            </ul>
            <div className="hidden max-lg:block">
            <a>
                <img 
                src={hamburger}
                alt="humburger"
                width={25}
                height={25}/>
            </a>
            </div>

        </nav>
    </header>
  )
}

export default Nav
