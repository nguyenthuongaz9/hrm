import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Employee, Profile } from "@prisma/client";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

import { useRouter } from "next/navigation";



interface ProfileTableProps {
    profiles : any[]
}


const ProfileTable = ({
    profiles
}: ProfileTableProps) => {


    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

   


    return (
        <div className="w-full h-full" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            STT
                        </TableHead>
                        <TableHead>
                            Mã hồ sơ
                        </TableHead>
                        <TableHead>
                            Mã nhân viên
                        </TableHead>
                        <TableHead>
                            Hình ảnh
                        </TableHead>
                        <TableHead>
                            Họ tên
                        </TableHead>
                        <TableHead>
                            Ngày sinh
                        </TableHead>
                        
                        
                        <TableHead>
                            Xem
                        </TableHead>
                        <TableHead>
                            Sửa
                        </TableHead>
                        <TableHead>
                            Xóa
                        </TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>
                    {profiles.map((profile, index) => (
                        <TableRow key={profile.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{profile.id}</TableCell>
                            <TableCell>{profile.employee?.id}</TableCell>
                            <TableCell>
                                <img src={profile.imageUrl} alt="imageUrl" className="w-[70px] h-[80px] rounded-md ring-2 object-cover" />
                            </TableCell>
                            <TableCell>{profile.employee.firstName} {profile.employee.lastName}</TableCell>
                            <TableCell>{profile.employee.dateOfBirth.toLocaleDateString()}</TableCell>
                            
                            
                            <TableCell>
                                <Button
                                    variant='ghost'

                                   
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                   
                                    
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> setIsOpen(true)}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25}  />
                                </Button>

                                
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>



            </Table>


        </div>
    )
}

export default ProfileTable




