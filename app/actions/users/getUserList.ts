import { db } from "@/lib/db"





async function getUserList() {
    const users = await db.user.findMany({
       
    })
    
    if(!users){
        return []
    }

    return users
}

export default getUserList