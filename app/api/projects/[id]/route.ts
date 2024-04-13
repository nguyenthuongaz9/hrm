import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function PUT(req: Request, context: any) {
    try {
        
        const { params } = context
        const id = params.id
        const body = await req.json()

        const {
            name,
            startDate,
            endDate,
            description,
            status
        } = body;


        const updated = await db.project.update({
            where:{
                id
            },
            data:{
                name,
                startDate,
                endDate,
                description,
                status
            }
        })


        if(!updated){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(updated)




    } catch (error) {
        console.log(error)
    }
    
}



export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context;
        const id = params.id

        const deleted = await db.project.delete({
            where:{
                id
            }
        })

        if(!deleted){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(deleted)

    } catch (error) {
        console.log(error)
    }
    
}