import { useState } from "react";
import ProductCard, { width } from "./ProductCard";
import { Link } from "react-router-dom";

    const Products = ({Category, itemlist}) => {
    const [isEnd, setIsEnd] = useState(false);
    const Rightarrow = '>';
    const Leftarrow = '<';
    let itemlistdis = itemlist;
    if(itemlist.length > 8){
        itemlistdis = itemlistdis.slice(0,8);
    }


    const moveEnd = () =>{
        setIsEnd(true);
    }
    const moveStart = () =>{
        setIsEnd(false);
    }
    // console.log(itemlistdis, itemlist.length)
    return(
        <div className={`pr-0 pl-0 p-3 m-5 border bg-white pt-0`}>
            <div className="w-full flex items-center justify-between pr-2">
                <h2 className=" font-bold pl-3 py-4 text-xl">{Category}</h2>
                <Link to={{pathname: "/category", state: itemlist, search: Category}} state = {{"item":itemlist, "Category": Category}}>
                    <p className="text-white font-bold pb-1 bg-blue-700 h-fit rounded-full px-2">{Rightarrow}</p>
                </Link>
            </div>

            <div className={`flex items-center relative`}>
                <div className={`flex pl-3 overflow-hidden w-full ${isEnd?'justify-end':'justify-start'} gap-6 `}> 
                    
                    {itemlistdis.map((item, ind) =>{
                        return(
                            <ProductCard 
                                key = {ind}
                                image={item.image}
                                content={item.content}
                                heading={item.heading}
                            />
                        )
                    })}
                    
                </div>
                <div onClick={moveStart} className={`${isEnd?'':'hidden'}  cursor-pointer absolute h-20 bg-white items-center flex border px-4 left-0`}>
                    <p >{Leftarrow}</p>
                </div>
                <div onClick={moveEnd} className={`${isEnd?'hidden':''}  cursor-pointer h-20 bg-white items-center flex absolute right-0 px-4 border`}>
                    <p>{Rightarrow}</p>
                </div>
            </div>
        </div>
    )
}

export default Products;