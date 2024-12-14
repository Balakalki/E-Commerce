

const ProductCard = ({image, content, heading}) =>{
    return(
        <>
            <div className="bg-blue-200 flex flex-col justify-center p-3 gap-2 rounded-md h-56 w-52">
                <div className="h-36 w-44 bg-green-200">
                    <img src={image} alt="" />
                </div>
                <div className="h-12 w-44 bg-yellow-200">
                    {content}
                    <br />
                    {heading}
                </div>
            </div>
        </>
    )
}

export default ProductCard