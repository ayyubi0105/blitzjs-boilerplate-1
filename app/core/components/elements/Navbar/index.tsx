import React from "react"
import { NavbarProps } from "./interaface"
import Image from "next/image"
import comfestLogo from "../../../../../public/Compfest Logo.png"
import comfestLogoFooter from "../../../../../public/Comfest Logo Footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
  faLine,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div>
      <div className="h-[64px] flex items-center justify-center">
        <Image src={comfestLogo} alt="logo comfest" />
      </div>
      {children}
      <div className="h-[160px] bg-[#2D2F45] rounded-t-3xl border border-[#60648B] px-[112px] mt-20">
        <div className="h-full w-full flex justify-between">
          <div className="flex items-center">
            <Image src={comfestLogoFooter} alt="logo comfest" />
          </div>
          <div className=" items-center space-x-7 text-white hidden md:flex">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faLine} />
            <FontAwesomeIcon icon={faMedium} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
