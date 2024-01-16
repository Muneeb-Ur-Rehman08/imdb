import Link from "next/link";
import { MenuItems } from "./menuItems"
import { AiFillHome } from "react-icons/ai"; 
import { BsFillInfoCircleFill } from "react-icons/bs";



export const Header = () => {
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex gap-2 ">
                <MenuItems name='Home' address={'/'} Icon={AiFillHome} />
                <MenuItems name='About' address={'/about'} Icon={BsFillInfoCircleFill} />
            </div>
            <div>
                <Link href={'/'} >
                    <h2 className="text-2xl">
                        <span className="bg-amber-500 py-1 px-2 rounded-lg font-bold mr-1">IMDb</span><span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
} 