"use client"



import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline, IoIosSearch, IoMdArrowDropright } from "react-icons/io";

import { Pagination } from "@mui/material";
import { Department } from '@prisma/client';
import DepartmentTable from './DepartmentTable';
import DepartmentDialog from './DepartmentDialog';


const PAGE_SIZE = 5;

interface MainContentProps {
    departments: any[]
}

const MainContent = ({
    departments
}: MainContentProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false)

    const [searchValue, setSearchValue] = useState<any[]>(departments);
    const [searchType, setSearchType] = useState<string>("name"); // Mặc định tìm kiếm theo tên

    const totalPages = Math.ceil(departments.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const currentDepartments = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        setSearchType("name");
    }, []);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = departments.filter((item) => {
            const employeeName = item.departmentName
            if (searchType === 'name') {

                return employeeName.toLowerCase().includes(value);
            }
            if (searchType === 'id') {
                return item.id.toString().includes(value);
            }
            return true;
        });
        setSearchValue(filteredData);
    };



    const toggleButton = () => {
        setIsOpen(true)
    }

    return (
        <div className="w-full h-full p-5 space-y-10 overflow-auto">


            <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">Phòng ban</h3>
                <Button
                    onClick={toggleButton}
                    className="transition-all flex items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                >
                    <IoIosAddCircleOutline size={25} />
                    <p className="text-white font-semibold">Thêm phòng ban mới</p>
                </Button>
            </div>
            <div className="border p-5 rounded-lg shadow-md">
                <div className="w-full flex justify-between">
                    <div className="">
                        <h3 className="text-md font-semibold">
                            Danh sách phòng ban
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[300px] border border-solid flex items-center rounded-lg">
                            <IoIosSearch size={25} className="ml-3" />
                            <input
                                onChange={handleSearchChange}
                                className="focus:outline-none px-3 py-2" type="text" placeholder="..." />
                        </div>
                        <div className="border flex items-center justify-center rounded-lg px-2">
                            <select
                                className="w-full focus:outline-none" name="category"
                                id="category"
                                value={searchType} // Set giá trị mặc định cho select
                                onChange={(event) => setSearchType(event.target.value)}
                            >
                                <option value="name">Tên</option> {/* Mặc định tìm kiếm theo tên */}
                                <option value="id">Mã </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <DepartmentTable departments={currentDepartments} />
                </div>

            </div>
            <div className="w-full mb-20 flex items-center justify-center">
                <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
            </div>
            <div>
                <DepartmentDialog isOpen={isOpen} setIsOpen={setIsOpen} variant='create' />
            </div>


        </div>
    );
};

export default MainContent;
