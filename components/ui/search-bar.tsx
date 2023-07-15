"use client"

import { Search } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input"

const SearchBar = () => {
    return ( 
        <div className="bg-white group cursor-pointer rounded-full border items-center justify-center">
            {/*
            <div className="grid grid-cols-2">
                <input className="text-gray-500 py-2 px-4" type="text" placeholder="Search..." />
                <IconButton className="grid place-items-end"
                    onClick={() => {}}
                    icon={<Search size={20} className="grid text-gray-600 place-items-end" />}
                />
            </div>
            */}
            <div className="flex w-full max-w-sm items-center space-x-2 bg-white group cursor-pointer rounded-full border justify-center">
                <Input className="text-gray-500 py-2 px-4 rounded-full" type="text" placeholder="Search..." />
                <IconButton 
                    className="grid place-items-end" 
                    type="submit" 
                    icon={<Search size={20} className="grid text-gray-600 place-items-end" 
                    />} />
            </div>
        </div>
     );
}
 
export default SearchBar;