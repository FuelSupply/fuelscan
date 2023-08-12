import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
    RiArrowDropDownLine
} from 'react-icons/ri';



export default function Home() {

    return <div className="p-4 bg-white border-b shadow-lg border-off-white">
        <header className="container flex items-center justify-between w-full mx-auto h-60">
            <Link href="/">
                <p className="">FuelSacn</p>
            </Link>
            <ul className="flex items-center h-full">
                <li className="relative mr-30 hover:text-steel-blue group">
                    <div className="flex items-center cursor-pointer hover:text-steel-blue">
                        <span>
                            Testnet
                        </span>
                        <RiArrowDropDownLine className="ml-2 text-2xl hover:text-steel-blue" />
                    </div>
                    <ul className="absolute z-10 hidden p-10 translate-y-1 bg-white border rounded-md shadow-lg group-hover:block w-224 shadow-cyan-500/50 border-gray">
                        <li className="h-full p-4 pl-10 mb-5 text-sm text-black rounded-md cursor-pointer hover:bg-light-gray">
                            Testnet beta-3
                        </li>
                    </ul>
                </li>
                {/* <ul className="flex items-center h-full">
                                 <li className="relative mr-30 hover:text-steel-blue group">
                    <div className="flex items-center cursor-pointer hover:text-steel-blue">
                        <span>
                            Blockchain
                        </span>
                        <RiArrowDropDownLine className="ml-2 text-2xl hover:text-steel-blue" />
                    </div>
                    <ul className="absolute z-10 hidden p-10 translate-y-1 bg-white border rounded-md shadow-lg group-hover:block w-224 shadow-cyan-500/50 border-gray">
                        <li className="h-full p-4 pl-10 mb-5 text-sm text-black rounded-md cursor-pointer hover:bg-light-gray">
                            Transactions
                        </li>
                        {<li className="h-full p-4 pl-10 text-sm text-black rounded-md cursor-pointer hover:bg-light-gray">
                            Pending Transactions
                        </li> 
                <li className="h-full p-4 pl-10 mb-5 text-sm text-black rounded-md cursor-pointer hover:bg-light-gray">
                    Blocks
                </li>
            </ul>
        </li> */}

                {/*                 <li className="relative mr-30 hover:text-steel-blue group">
                    <div className="flex items-center cursor-pointer hover:text-steel-blue">
                        <span>
                            Tools
                        </span>
                        <RiArrowDropDownLine className="ml-2 text-2xl hover:text-steel-blue" />
                    </div>
                    <ul className="absolute z-10 hidden p-10 translate-y-1 bg-white border rounded-md shadow-lg group-hover:block w-224 shadow-cyan-500/50 border-gray">
                        <li className="h-full p-4 pl-10 mb-5 text-sm text-black rounded-md cursor-pointer hover:bg-light-gray">
                            <a href="https://bscscan.com/unitconverter" target="_blank" rel="noopener noreferrer">
                                unit Converter
                            </a>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="flex items-center cursor-pointer hover:text-steel-blue">
                    <BsSun className="ml-2 text-2xl" />
                    <BsMoon className="ml-2 text-xl" />
                </li> */}
            </ul>
        </header >
    </div >
}