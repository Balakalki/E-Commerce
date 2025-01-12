import CatProducts from "./CatProducts"
import { useLocation } from "react-router-dom"


export default function Category(){
    const location = useLocation();
    const {item, Category } = location.state || {"item": [], "Category" : "404 Page Not found"};

    // const item = ["first item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item", "second item"]
    return(
        <div className="bg-white p-2">
            <div className="h-40 flex flex-col justify-center items-center">
                <h1 className="font-bold text-2xl pb-3">{Category}</h1>
                <p >{item.length} items</p>
            </div>
            <hr />
            <div className="flex flex-wrap px-24 py-5 gap-32">
                {item.map((val, ind) =>{
                    return(
                        <div key = {ind}>
                            <CatProducts
                            image={val.image}
                            category={val.content}
                            title={val.heading}
                            brand={val.brand}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}