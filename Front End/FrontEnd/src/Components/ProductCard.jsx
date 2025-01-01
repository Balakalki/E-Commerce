

const ProductCard = ({image, content, heading}) =>{
    return(
        <>
            <div className="flex bg-white border flex-col justify-center p-3 gap-2 rounded-md">
                <div className="h-32">
                    <img className="h-full w-full" src={image} alt="" />
                </div>
                <div className="">
                    {content}
                    <br />
                    <h3 className="font-semibold">{heading}</h3>
                </div>
            </div>
        </>
    )
}

export default ProductCard