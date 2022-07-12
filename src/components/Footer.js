import React from "react"
import Image from "next/image"
import Link from "next/link"
import LI from "../assets/social-media-icons/linkedin.png"
import TW from "../assets/social-media-icons/twitter.png"
import GH from "../assets/social-media-icons/github.png"

const Footer = () => {
  return (
    <footer className="font-sans bg-black">
      <div className="grid lg:grid-cols-2 font-sans">
        <section className="flex flex-row w-auto my-auto">
          <Link href="https://www.linkedin.com/in/leandrojesusg/">
            <a className="w-5 mr-4 " target="_blank">
              <Image src={LI} alt="" />
            </a>
          </Link>
          <Link href="https://twitter.com/leajesusg">
            <a className="w-5 mr-4 " target="_blank">
              <Image src={TW} alt="" />
            </a>
          </Link>
          <Link href="https://github.com/0x1ea">
            <a className="w-5 mr-4 " target="_blank">
              <Image src={GH} alt="" />
            </a>
          </Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer
