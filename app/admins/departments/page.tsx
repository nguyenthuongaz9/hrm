import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import MainContent from "./components/MainContent"

const page = async () => {
  const departments = await getDepartmentList()

  
  return (
    <div className="w-full h-full">
      <MainContent departments={departments}/>
    </div>
  )
}

export default page