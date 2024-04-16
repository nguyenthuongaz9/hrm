"use client"

import { User } from "@prisma/client"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import HomePage from "../../app/(site)/components/Home";
import { useEffect, useState } from "react";



interface AppRouterProps{
    currentUser : User | undefined | null;
}

const AppRouter = ({
    currentUser
}: AppRouterProps) => {

    
    const session = useSession()
    const router = useRouter()

   
   

    if(!session){
        router.push('/authentication')
    }

    

    if(!currentUser){
        return (
            <div className="w-full h-full">
                <HomePage />
            </div>
        )
    }

    useEffect(()=>{
        if (session.status === 'authenticated') {
            if(currentUser?.role === 'ADMIN'){
                return redirect('/admins')
            }
            if(currentUser?.role === 'GUEST'){
                return redirect('/users')
            }
        }
    },[currentUser, session])






}

export default AppRouter