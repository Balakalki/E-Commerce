

const CatProducts = ({image, category, title, brand}) =>{
    return(
        <>
            <div className="flex shrink-0 w-[13.5rem]  bg-white flex-col justify-center p-3 gap-2 rounded-md">
                <div className="h-48 w-48 hover:scale-110">
                    <img className="h-full w-full" src={image} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold">{category}</h3>
                    <h4 className="text-green-800">{title}</h4>
                    <h4>{brand}</h4>

                    <br />
                </div>
            </div>
        </>
    )
}

export const width = 13.5;
export default CatProducts