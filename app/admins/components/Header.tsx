import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosArrowDown } from "react-icons/io";
import { PiNoteDuotone } from "react-icons/pi";

const Header = () => {

    return (
        <div
            className="
                h-[4em] 
                border-b 
                 box-border
                w-full 
                font-bold  
                shadow-sm

                "
        >
            <div className="w-full h-full px-10 py-5 flex items-center justify-end box-border">
                
                <div className="flex items-center gap-3 ">
                    <div className="relative">
                        <PiNoteDuotone size={20} className="text-gray-600 cursor-pointer" />
                        <div className="w-[10px] h-[10px] bg-rose-500 absolute -top-1 right-0 rounded-full"/>
                    </div>
                    <div className="flex gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-2">
                            <h2
                                className="text-sm font-semibold"
                            >
                                Nguyễn Văn Thường
                            </h2>
                            <IoIosArrowDown className="text-gray-600" size={16}/>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Header