import { useEffect, useState } from "react"


const SlideCard = ({images}) =>{

    const [imageIndex, setImageIndex] = useState(0)
    

    const changeImag = (ind) =>{
        setImageIndex(ind)
    }

    const moveLeft = () =>{
        const newIndex = imageIndex === 0? images.length - 1: imageIndex - 1;
        setImageIndex(newIndex)
    }
    const moveRight = () =>{
        const newIndex = imageIndex === images.length - 1? 0: imageIndex + 1;
        setImageIndex(newIndex)
    }

    useEffect(() =>{
        const interval = setInterval(() => {
            moveRight()
        }, 3000);
        return () => clearInterval(interval)
    }, [imageIndex])
    const left = '<'
    const right = '>'
    return(
        <>
            <div className={`mx-5  h-60 mt-5 flex overflow-hidden`}>
                {images.map((image, ind) =>{
                    return(
                        <img style={{translate : `${-100 * imageIndex}%`}} className="bg-cover transition-all duration-500 shrink-0 grow-0 h-full w-full" key={ind} src={image} alt="" />
                    )
                })}
                
            </div>
            <div className="flex mx-5 top-[-10rem]  relative">
                <button onClick={moveLeft} className="left-0 bg-white h-20 w-8 rounded-r-sm absolute font-bold text-slate-400">{left}</button>
                <button onClick={moveRight} className="right-0 bg-white h-20 w-8 rounded-r-sm absolute font-bold text-slate-400">{right}</button>
            </div>
            <div className="bg-white gap-5 flex justify-center " >
                {images.map((_, ind) =>{
                return(
                    <div  onClick={() => changeImag(ind)} 
                    key={ind} 
                    className={`${ind === imageIndex ? 'bg-black w-10' : 'bg-slate-200 w-3'} cursor-pointer rounded-full h-1 my-2 flex`}></div>
                )
                })}
            </div>
        </>
    )
}

export default SlideCard