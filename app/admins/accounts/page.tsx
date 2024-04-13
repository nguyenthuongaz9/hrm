import getUserList from "@/app/actions/users/getUserList"
import MainContent from "./components/MainContent"






const page = async () => {

    const users = await getUserList();
    return (
        <div className="w-full h-full">
            <MainContent accounts={users}/>

        </div>
    )
}

export default page