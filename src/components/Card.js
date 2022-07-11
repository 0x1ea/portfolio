import React from "react"
import Image from "next/image"
import Tag from "./Tag"
// import SAMPLEIMAGE from "../assets/NerdsCollection.png"
import Link from "next/link"

const Card = ({ project }) => {
  return (
    <div className="bg-[#222222] rounded-lg hover:scale-101">
      <Link href="https://google.com/">
        <a className="cursor-pointer" target="_blank">
          <Image
            src={project.image}
            alt=""
            className="z-0 rounded-tl-lg rounded-tr-lg "
            width="90%"
            height="60%"
            layout="responsive"
            priority
          />
        </a>
      </Link>

      <div className="flex justify-between p-2 font-sans">
        <div className="">
          <h1 className="text-base font-semibold text-white mb-1 pl-1">{project.title}</h1>
          <div className="flex flex-wrap text-[#94A3B8] text-sm">
            {project.tags.map((tag) => (
              <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="flex mt-0.5 w-6 h-6 hover:scale-105">
          <Link href="https://google.com/">
            <a className="cursor-pointer" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white opacity-70"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
