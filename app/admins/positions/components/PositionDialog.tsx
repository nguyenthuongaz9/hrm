"use client"



import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Employee } from '@prisma/client';

interface PositionDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    variant: "create" | "edit" | "view" | "delete",
    data?: any
}


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Tên chức vụ không được để trống"
    }),
    coefficient: z.string().min(1,{
        message: "Hệ số lương không được để trống"
    })
})





export default function PositionDialog({
    isOpen,
    setIsOpen,
    variant,
    data
}: PositionDialogProps) {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            coefficient: ''
        }

    })


    function onSubmit(values: z.infer<typeof formSchema>) {


        if (variant === 'create') {
            axios.post('/api/positions', {
                ...values
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Tạo chức vụ thành công')
                    form.reset()
                    location.reload()
                } else {
                    toast.error('Tạo chức vụ thất bại')
                }
            })
        }

        if (variant === 'edit') {
            axios.put('/api/positions', {
                id: data.id,
                name: values.name,
                coefficient: values.coefficient
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Cập nhật thành công')
                    location.reload()
                } else {
                    toast.error('Cập nhật thất bại')
                }
            })

        }




    }

    const handleDeleteButton = () => {
        if (variant === 'delete') {
            axios.delete('/api/positions', {
                data: {
                    id: data.id
                }
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Xóa thành công')
                    location.reload()
                } else {
                    toast.error('Xóa thành công thất bại')
                }
            })
        }
    }


    useEffect(() => {
        if (data && variant === 'edit') {
            form.setValue('name', data.positionName);
            form.setValue('coefficient', data.coefficient);

        }
    }, [data, variant, form]);




    if (variant === 'view') {
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent className='w-[35rem]'>
                    <div className='w-full flex justify-end items-center'>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='transition-all p-2 bg-rose-500 rounded-lg shadow-2xl hover:bg-rose-600 hover:ring-1 hover:ring-rose-800 text-white'
                        >
                            <IoMdClose />
                        </button>
                    </div>


                    <div className='space-y-4 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Tên chức vụ</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.positionName}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Ngày tạo</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.createAt.toLocaleDateString()}</p>
                        </div>


                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    if (variant === 'delete') {
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent >
                    <h3>Bạn chắc chắn muốn xóa tài khoản?</h3>
                    <div className='w-full h-full flex justify-between p-5'>
                        <button
                            className='transition-all text-white rounded-md px-3 py-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2'
                            onClick={() => setIsOpen(false)}
                        >
                            Hủy
                        </button>
                        <button
                            className='transition-all text-white rounded-md px-3 py-2 bg-rose-500 hover:bg-rose-600 hover:ring-2'
                            onClick={handleDeleteButton}
                        >
                            Xác nhận
                        </button>

                    </div>
                </DialogContent>

            </Dialog>
        )
    }


    return (
        <Dialog open={isOpen} >

            <DialogContent className='w-[35rem]'>
                <div className='w-full flex justify-end items-center'>
                    <button
                        onClick={() => setIsOpen(false)}
                        className='transition-all p-2 bg-rose-500 rounded-lg shadow-2xl hover:bg-rose-600 hover:ring-1 hover:ring-rose-800 text-white'
                    >
                        <IoMdClose />
                    </button>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <h3 className='text-md font-bold'>{variant === 'edit' ? 'Chỉnh sửa chức vụ' : 'Thêm chức vụ mới'}</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>

                                        <div className='flex items-center gap-1'>
                                            <h3>Tên chức vụ</h3>
                                            <p className='text-rose-500'>*</p>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="Tên chức vụ" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="coefficient"
                                render={({ field }) => (
                                    <FormItem>

                                        <div className='flex items-center gap-1'>
                                            <h3>Hệ số lương</h3>
                                            <p className='text-rose-500'>*</p>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="..." {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button
                                className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                                type="submit"
                            >
                                {variant === 'edit' ? 'Cập nhật' : 'Thêm'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}


