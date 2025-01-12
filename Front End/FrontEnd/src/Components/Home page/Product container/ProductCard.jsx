

const ProductCard = ({image, content, heading}) =>{
    return(
        <>
            <div className="flex shrink-0 w-[13.5rem]  bg-white border flex-col justify-center p-3 gap-2 rounded-md">
                <div className="h-48 w-48 hover:scale-110">
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

export const width = 13.5;
export default ProductCard