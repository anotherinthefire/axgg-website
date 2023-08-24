import { Link } from "react-router-dom"
import Menu from "./Menu"
import logo from "../assets/images/logo.png"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import twitter from "../assets/icons/twitter.svg"

const Footer = () => {

  return (
    <footer className="pt-20 bottom-0 bg-axggDark">
      <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
        <div className="sm:flex">
          <div className="space-y-6">
            <img src={logo} className="w-32" />
          </div>
          {/* nav items */}
          <div className="mx-auto font-light">
            <ul className="flex flex-wrap justify-center gap-20 text-sm sm:text-base mb-8">
              {
                Menu.map((item, idx) => (
                  <li key={idx} className="text-white hover:text-axggBlue duration-150">
                    <Link to={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>

            {/* socials */}
            <ul className="flex flex-wrap justify-center gap-10 text-sm sm:text-base mb-5">
              <li className="text-white hover:text-axggBlue duration-150">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} className="h-6" alt="Facebook" />
                </a>
              </li>
              <li className="text-white hover:text-axggBlue duration-150">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} className="h-6" alt="Instagram" />
                </a>
              </li>
              <li className="text-white hover:text-axggBlue duration-150">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} className="h-6" alt="Twitter" />
                </a>
              </li>
            </ul>


            {/* terms and cons */}
            <ul className="flex flex-wrap justify-center gap-10 text-sm sm:text-base">
              <li className="text-white hover:text-axggBlue duration-150">
                <Link to="/terms-condition">
                  Terms and Condition
                </Link>
              </li>
              <li className="text-white justify-center hover:text-axggBlue duration-150">
                <Link to="/privacy-policy">
                  Privacy and Policy
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="w-screen text-center mt-20 bg-[#1E1E1E] text-white">
        <p>© 2023 AXGG.</p>
      </div>
    </footer>
  )
}

export default Footer
