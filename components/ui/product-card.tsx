"use client"

import Image from "next/image";
import { Expand, Heart, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import LikeButton from "./like-button";
import ProductPopUp from "./product-page";

interface ProductCard {
    data: Product; 
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return ( 
        <div className="p-4">
            <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 items-center justify-center">
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <Image 
                        src={data?.images?.[0].url}
                        fill
                        alt="Image"
                        className="aspect-square object-cover rounded-md"
                    />  
                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                        <div className="flex gap-x-6 justify-center">
                            <IconButton 
                                onClick={() => {}}
                                icon={<Expand size={20} className="text-gray-600" />}
                            />

                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">
                        {data.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {data.category?.name}
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <Currency value={data?.price} />
                    </div>
                    <div className="grid place-items-end">
                        <LikeButton />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;