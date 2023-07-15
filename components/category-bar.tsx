interface CategoryBarProps {
    className?: string
}

const CategoryBar: React.FC<CategoryBarProps> = ({
    className
}) => {
    return (
        <div className="p-4">
            <div className="border rounded-xl bg-white group cursor-pointer p-3 items-center justify-center">
                Categories
                <ul className="p-4 list-outside">
                    <li>Literature</li>
                    <li className="list-outside">Series
                        <ul className="p-4">
                            <li>Harry Potter</li>
                            <li>The Lord of the Rings</li>
                        </ul>
                    </li>
                    <li>Authors</li>
                </ul>
            </div>
        </div>
        
     );
}
 
export default CategoryBar;