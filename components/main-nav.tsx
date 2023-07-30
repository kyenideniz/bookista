"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps{
    //data: [string],
};

const MainNav: React.FC<MainNavProps> = ({
    //data
}) => {

    /*const pathname = usePathname();
    const routes = data.map((route) => ({
        /*href: `/category/${route.id}`,
        href:`/`,
        label: String,
        active: pathname === `/category/`
    }))*/

    return ( 
        <nav
        className="mx-6 items-center flex space-x-4 lg:space-x-6"
        >
           {/* {routes.map((route) => (
                <Link 
                key={route.href}
                href={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                )}
                >
                    {}
                </Link> 
            ))} */}
        </nav>
     );
}
 
export default MainNav;