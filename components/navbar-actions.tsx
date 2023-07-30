"use client"

import { auth } from "@clerk/nextjs";
import { LogInIcon, ShoppingBag } from "lucide-react";

import Button from "@/components/ui/custom-button";
import { useEffect, useState } from "react";

const NavBarActions = () => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center">
            {/*<Button className="flex items-center roundded-full bg-black px-2 py-2">
                <span className="ml-2 text-sm font-medium text-white px-2 ">Sign In</span>
                <LogInIcon
                    size={20}
                    color="white"
                    href='/sign-in'
                    className="flex"
                />
            </Button>*/}
        </div>
     );
}
 
export default NavBarActions;