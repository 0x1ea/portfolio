import Card from "../components/Card"
import projects from "../assets/artifacts/projects.json"
export default function Home() {
  return (
    <div className="grid lg:grid-cols-3">
      <div className="bg-zinc-900 w-full h-full font-mono text-white">
        <h1 className=" font-mono transiti">Hi, i&apos;m Leo.</h1>
        <p>me@portfolio ~ hi</p>
        <p>me@portfolio ~ hi</p>
      </div>
      <div className="grid auto-rows-min lg:grid-cols-2 gap-4 p-4 col-span-2 bg-black h-full">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
