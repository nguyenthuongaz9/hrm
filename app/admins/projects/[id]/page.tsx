
import getProjectById from "@/app/actions/projects/getProjectById"
import MainContent from "./components/MainContent"



interface IParams{
  id: string
}



const ProjectIdPage = async ({
  params
}:{
  params: IParams
}) => {

  const project = await getProjectById(params.id)

  if(!project){
    return null;
  }
  
  return (
    <div>
      <MainContent employees={project?.employees} project={project}/>
    </div>
  )
}

export default ProjectIdPage