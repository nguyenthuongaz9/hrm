"use client"




import { Profile } from "@prisma/client"

import { IoIosSearch } from "react-icons/io"

import { useEffect, useState } from "react"
import ProfileTable from "./ProfileTable"



interface MainContentProps {
    profiles: Profile[]
}

const MainContent = ({
    profiles
}: MainContentProps) => {

    const [isMounted, setIsMounted] = useState(false);

    if (profiles.length < 1) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <h2 className="text-2xl font-bold">Chưa có hồ sơ nào</h2>

            </div>
        )
    }

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }


    return (
        <div className="w-full h-full p-5 space-y-10 overflow-auto">
            <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">Nhân viên</h3>
                
            </div>
            <div className="border p-5 rounded-lg shadow-md">
                <div className="w-full flex justify-between">
                    <div className="">
                        <h3 className="text-md font-semibold">
                            Danh sách nhân viên
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[300px] border border-solid flex items-center rounded-lg">
                            <IoIosSearch size={25} className="ml-3" />
                            <input className="focus:outline-none px-3 py-2" type="text" placeholder="..." />
                        </div>
                        <div className="border flex items-center justify-center rounded-lg px-2">
                            <select className="w-full focus:outline-none" name="category" id="caregory">
                                <option value=""></option>
                                <option value="email">Tên phòng</option>
                                <option value="id">Mã phòng</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <ProfileTable profiles={profiles}/>
                </div>

            </div>
            <div className="w-full mb-20 flex items-center justify-center">
                {/* <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} /> */}
            </div>
            <div>
                {/* <DepartmentDialog isOpen={isOpen} setIsOpen={setIsOpen} variant='create' /> */}
            </div>


        </div>
    )
}

export default MainContent

