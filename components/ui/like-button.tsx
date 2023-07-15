import { useState } from "react";
import { auth } from "@clerk/nextjs";
import { Heart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";

//const { userId } = auth();

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {setLiked(!liked)}

    return(
        <div className="bg-white group cursor-pointer rounded-full border items-center justify-center">
            <div className="grid grid-cols-2 items-center justify-center space-x-4">
                <IconButton 
                    
                    onClick={() => handleClick()} 
                    icon={<Heart size={15} color={ liked? '#fe2f41':'black' } fill={ liked? '#fe2f41':'white' } />} 
                />
                <p className="text-gray-500">{ liked? "13":"12" }</p>
            </div>
        </div>
    );
}
 
export default LikeButton;