import { db } from "@/lib/db"



export default async function getEmployeeById(id: string) {
    const employee = await db.employee.findUnique({
        where:{
            id
        },
        include:{
            department: true,
            typeOfEmployee: true,
            position: true,
            nations: true,
            degrees: true,
            slaries: {
                include:{
                    employee: {
                        include:{
                            position: true
                        }
                    }
                }
            }
        }
    })


    if(!employee){
        return null;
    }

    return employee;
}