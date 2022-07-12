import React from "react"
import Card from "../components/Card"
import projects from "../assets/artifacts/projects.json"
import styled from "../styles/typing.module.css"
import Footer from "../components/Footer"
import Head from "next/head"
export default function Home() {
  const [time, setTime] = React.useState(1)

  React.useEffect(() => {
    setTimeout(() => {
      setTime(time + 1)
    }, 2000)
  }, [time])

  return (
    <>
      <Head>
        <title>Leandro&apos;s Portfolio</title>
        <meta name="description" content="Leandro's Portfolio build with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid lg:grid-cols-3 bg-black">
        <div className="flex flex-col my-auto px-4 pt-8  lg:mt-48 font-mono font-semibold text-white w-full h-52">
          <h1 className={time == 1 ? styled["typewriter-text"] : "font-sans text-lg"}>Hi,</h1>
          <h1
            className={
              time > 1 && time <= 2
                ? styled["typewriter-text2"]
                : `${time > 2 ? "" : "hidden"} font-sans text-lg`
            }
          >
            I&apos;m, Leo,
          </h1>
          <h1
            className={
              time > 2
                ? styled["typewriter-text3"]
                : `${time > 3 ? "" : "hidden"} font-sans text-lg`
            }
          >
            web developer.
          </h1>

          <p className="font-mono font-medium text-sm opacity-50 mt-auto mb-2 w-full">
            <span>Front End Developer</span> / <span>Blockchain Developer</span> /{" "}
            <span>Freelancer</span>
          </p>
          <Footer />
        </div>
        <div className="grid auto-rows-min bg-black sm:grid-cols-2 gap-4 p-4 col-span-2 lg:h-screen lg:overflow-y-scroll">
          <h1 className="block lg:col-span-2 font-mono font-medium text-white w-full">
            Selected-Projects/ <br />
          </h1>
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
