


import getProjectList from "@/app/actions/projects/getProjectList"
import MainContent from "./components/MainContent"

const page = async () => {
  const projects = await getProjectList()

  
  return (
    <div className="w-full h-full">
      <MainContent projects={projects}/>
    </div>
  )
}

export default page