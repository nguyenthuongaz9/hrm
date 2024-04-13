
import MainContent from "./components/MainContent"
import getPositionList from "@/app/actions/positions/getPositonList"

const page = async () => {
  

  const positions = await getPositionList()
  return (
    <div className="w-full h-full">
      <MainContent positions={positions}/>
    </div>
  )
}

export default page