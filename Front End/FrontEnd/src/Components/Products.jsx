import ProductCard from "./ProductCard";

const Products = ({Category, itemlist}) => {
    return(
        <div className="m-5 border pl-2 p-3 bg-white pt-0">
            <h2 className=" font-bold py-4 text-xl">{Category}</h2>
            <div className="flex gap-5 px-10"> 
                {/* <ProductCard /> */}
                {itemlist.map((item, ind) =>{
                    return(
                        <ProductCard 
                            key = {ind}
                            image={item.image}
                            content={item.content}
                            heading={item.heading}
                        />
                    )
                })}
                
                {/* <ProductCard />
                <ProductCard /> */}
            </div>
        </div>
    )
}

export default Products;