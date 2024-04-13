"use client"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useEffect, useState } from "react"
import { Department, Employee, Position, TypeOfEmployee } from "@prisma/client"
import axios from "axios"
import toast from "react-hot-toast"




const formSchema = z.object({
  level: z.string(),
  skills: z.string(),
  hobby: z.string(),
  imageUrl: z.string(),
  field: z.string(),
  time: z.string(),
  degreeName: z.string(),
  dayRange: z.date(),
  issuedBy: z.string(),
  projectName: z.string(),
  numberOfParticipants: z.string(),
  completionTime: z.string(),
  positionName: z.string(),
  companyName: z.string(),
  workingTime: z.string(),





})


const ProfileForm = () => {

    const [isMounted, setIsMounted] = useState(false);

    const [currentEmployee, setCurrentEmployee] = useState<Employee>()



    
   




    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           


        },
        
    })
    
    


    function onSubmit(values: z.infer<typeof formSchema>) {

        axios.post('/api/employees', {
            ...values
        }).then((callback)=>{
            if(callback.status === 200){
                toast.success('Thêm thành công')
                form.reset()
                location.reload()
            }else{
                toast.error("Thêm thất bại")
            }
        })

       
       
    }








    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }


    return (

        <div className="border rounded-md shadow-xl h-[90%] mb-20 overflow-auto">

            <div className="w-full border-b flex items-center gap-10 px-3 py-2">
                <h3 className="text-sm font-semibold ">Thêm hồ sơ mới</h3>

                <p className="flex items-center text-sm gap-2">Những ô có dấu <span className="text-rose-500 font-semibold">*</span> là bắt buộc</p>

            </div>

            <div className="px-3 py-2">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">

                        
                            <FormField
                                name="level"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Kĩ năng</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="skills"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Tên</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="hobby"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Giới tính</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select

                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="imageUrl"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Số điện thoại</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="field"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Email</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="time"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Địa chỉ liên hệ</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="degreeName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Ngày sinh</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="date"
                                                
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                onChange={(event) =>  field.onChange(new Date(event.target.value))}
                                            />

                                        </FormControl>

                                        
                                    

                                        


                                    </FormItem>
                                )}


                                

                                
                            />



                            <FormField
                                name="dayRange"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Nơi sinh</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="date"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                onChange={(event) =>  field.onChange(new Date(event.target.value))}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="issuedBy"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Số chứng minh thư</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="projectName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Ngày cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="date"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                onChange={(event) => field.onChange(new Date(event.target.value))}
                                            />

                                        </FormControl>


                                        

                                       

                                      

                                    </FormItem>
                                )}
                                rules={{ required: 'Ngày cấp không được để trống'}}
                            />
                            <FormField
                                name="issuedBy"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Nơi cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                {...field}
                                            />

                                        </FormControl>

                                        <FormMessage/>
                                        

                                       

                                      

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="numberOfParticipants"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Quốc tịnh</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input

                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="completionTime"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Tôn giáo</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                placeholder="Không"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="positionName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Dân tộc</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"

                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="companyName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Bằng cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select

                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value="hsd">Bằng cấp 3</option>
                                                <option value="ud">Bằng đại học</option>
                                                <option value="md">Bằng thạc sĩ</option>
                                                <option value="d">Bằng tiến sĩ sĩ</option>
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="workingTime"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Lĩnh vực</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"

                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                           

                        </div>


                        <button type="submit" className=" w-full text-white py-2 rounded-xl font-semibold transition-all bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2 mt-10">
                            Lưu thông tin
                        </button>


                    </form>
                </Form>
            </div>

        </div>
    )
}

export default ProfileForm