"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


const page = () => {
    const router = useRouter()
    return (
        <div>

            <button
                className="px-10 py-4 text-white bg-black rounded-lg"
                onClick={() => signOut().then(() => router.push('/'))}
            >signOut

            </button>
        </div>
    )
}

export default page