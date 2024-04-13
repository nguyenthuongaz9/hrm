import getEmployeeList from "@/app/actions/employees/getEmployeeList"
import MainContent from "./components/MainContent"


const EmployeePage = async () => {

  const employees = await getEmployeeList()

  return (
    <div className="w-full h-full">
      <MainContent employees={employees} />

    </div>
  )
}

export default EmployeePage