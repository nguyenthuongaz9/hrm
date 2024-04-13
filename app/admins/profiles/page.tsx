import getProfileList from "@/app/actions/getProfileList"
import MainContent from "./components/MainContent"


const ProfilePage = async () => {

  const profiles = await getProfileList()



  return (
    <div className="w-full h-full">
      <MainContent profiles={profiles}/>
      
    </div>
  )
}

export default ProfilePage