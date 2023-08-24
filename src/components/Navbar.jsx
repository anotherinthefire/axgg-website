import { useState } from "react"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import Menu from "./Menu"

import user from "../assets/icons/user.svg"
import cart from "../assets/icons/shopping-bag.svg"

const Navbar = () => {

  const [state, setState] = useState(false)

  return (
    <nav className="bg-axggBlue border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <Link to="/">
            <img
              src={logo}
              width={70}
              height={70}
              alt="axgg logo"
            />
          </Link>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
              Menu.map((item, idx) => {
                return (
                  <li key={idx} className="text-white">
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
              <li>
                <Link to="/cart" className="block py-3 px-4 md:inline">
                  <img src={cart} className="h-6" />
                </Link>
              </li>
              <li>
                <Link to="/profile" className="block py-3 px-4 md:inline">
                  <img src={user} className="h-6"/>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
