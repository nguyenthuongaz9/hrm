import charData from "../actions/employees/charData"
import charTypeEmployee from "../actions/employees/charTypeEmployee"
import generateCompletedProjectsData from "../actions/projects/countCompletedProjectsInMonth"
import getFinishedOfThisMonth from "../actions/projects/getFinishedProject"
import getNewProjectsOfThisMonth from "../actions/projects/getNewProjectsOfThisMonth"
import getProjectList from "../actions/projects/getProjectList"
import getUnFinishedOfThisMonth from "../actions/projects/getUnFinishedProject"
import ChartSection from "./components/ChartSection"
import Logout from "./components/Logout"
import ProjectSection from "./components/ProjectSection"
import StatusBar from "./components/StatusBar"






const AdminPage = async () => {
  const newProject = await getNewProjectsOfThisMonth()
  const finishedProject = await getFinishedOfThisMonth();
  const unfinishedProject = await getUnFinishedOfThisMonth();
  const projectData = await generateCompletedProjectsData()
  const projects = await getProjectList();
  var series= [{
    name: 'Nhân viên Nghỉ việc',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    color: '#45b4fa' 
  }, {
    name: 'Nhân viên mới',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    color: '#2d77f9' 
  }]

  const ChartSectionData = await charData()
  const chartType = await charTypeEmployee()
  return (
    <div className="w-full h-full p-5 overflow-auto">
        <StatusBar/>
        <ProjectSection newProject={newProject} finishedProject={finishedProject} unfinishedProject={unfinishedProject} data={projectData} projects={projects} />
        <ChartSection columnData={ChartSectionData} cicleData={chartType}/>
        <Logout/>
    </div>
  )
}

export default AdminPage