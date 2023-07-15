import { Billboard } from "@/types";
import SearchBar from "@/components/ui/search-bar";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-rectangle overflow-hidden">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            BOOKISTA
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
   );
};

export default Billboard;