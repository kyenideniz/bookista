import { Product } from "@/types";
import NoResults from "@/components/ui/no-result"
import ProductCard from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";
import CategoryBar from "@/components/category-bar";


interface ProductListProps{
    title: string;
    items: Product[];
}
const ProductList: React.FC<ProductListProps> = ({
    title, 
    items,
}) => {
    return ( 
        <div className="space-h-4">
            <Separator orientation="horizontal" className="my-4 bg-gray-600 opacity-50" />
            <div className="grid md:grid-cols-3 space-x-4"> 
                {/* <h3 className="font-bold text-3xl grid gap-x-4">{title}</h3> */}
                {items.length === 0 && <NoResults />}
                <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3">
                    {items.map((item) =>(
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
                
            </div>
        </div>
     );
}
 
export default ProductList;