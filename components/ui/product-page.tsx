import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import IconButton from "@/components/ui/icon-button";
import Image from "next/image";

import { Product } from "@/types";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Expand, Heart, ShoppingCart } from "lucide-react";

interface ProductPopUp {
  data: Product; 
}

const ProductPopUp: React.FC<ProductPopUp> = ({
  data
}) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <IconButton 
            onClick={() => {}}
            icon={<Expand size={20} className="text-gray-600" />}
          />
        </DialogTrigger>

        <DialogContent className=" bg-white w-full">
          <div className="grid grid-cols-4"> 
            <div className="col-span-2">
              <img 
                src={data?.images?.[0].url}
                alt="Image"
                className="aspect-square object-cover rounded-md h-[100%]"
                />
            </div>
            
            <div className="col-span-2 grid items-center justify-center">        
              <div className="text-xl sm:max-w-xl p-1">
                <p className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl pb-5">{data.name}</p>
                <p className="pb-5">Author: Author 1</p>
                <p className="pb-5">Category: {data.category?.name}</p>
                <p className="pb-5">Publish Date: DD/MM/YYYY</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam mi non nisl dignissim, id mattis ex viverra. Etiam et metus odio. Proin et erat fermentum, pellentesque velit at, faucibus odio. Donec tincidunt risus lacus, a euismod elit eleifend non. Aliquam eget arcu id lorem ullamcorper vehicula. Praesent placerat risus ex, sed fringilla mi fringilla eu. Praesent feugiat tortor eu dolor auctor, vitae tempor erat suscipit. Etiam sed tortor massa. Sed a massa sapien.</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  );
}

export default ProductPopUp;