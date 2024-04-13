"use client"

import { User } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import HomePage from "../../app/(site)/components/Home";
import { useEffect, useState } from "react";



interface AppRouterProps{
    currentUser : User | undefined | null;
}

const AppRouter = ({
    currentUser
}: AppRouterProps) => {

    const [isMounted, setIsMounted] = useState(false)
    const session = useSession()
    const router = useRouter()

   
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

    



    if (session.status === 'authenticated') {
        if(currentUser?.role === 'ADMIN'){
            router.push('/admins')
        }else{
            router.push('/users')
        }
    }

    return (
        <div className="w-full h-full">
            <HomePage />
        </div>
    )


}

export default AppRouter