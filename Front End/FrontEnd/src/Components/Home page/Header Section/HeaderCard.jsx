import { useState } from "react"
import Submenu from "./SubMenu"


const HeaderCard = ({image, title, hasDropdown, submenu}) =>{


    const [isHover, setIsHover] = useState(false)
    
    let keys = []
    if(submenu){
        keys = Object.keys(submenu)
    }

    const isHoverTrue = () =>{
        setIsHover(true)
    }
    const isHoverFalse = () =>{
        setIsHover(false)
    }

    
    return(
        <div className="shrink-0"
        onMouseEnter={isHoverTrue}
        onMouseLeave={isHoverFalse}
        >
           <div className="">
                <div className={`w-full flex justify-center pb-2 `}>
                    <img className="max-h-16 " src={image} alt="img" />
                </div>
                <div className={`flex text-sm font-semibold gap-2 ${hasDropdown && isHover ? 'text-blue-500':''}`}>
                    <h2 className=" font-semibold"> {title}  </h2>
                    <span className={` transition-transform duration-500 ${hasDropdown? `${isHover ? '' : 'rotate-180'}`:'hidden'}`}>
                        ^
                    </span>
                </div>
                    <div className="absolute z-10">
                        {hasDropdown === true && keys.length !== 0 && keys.map((val,index) =>{
                            return(
                                <div className={`${isHover ? '':'hidden'} text-sm`}>
                                    <Submenu
                                    key={index}
                                    value = {val}
                                    submenuobj={submenu[val]}
                                    />
                                </div>
                            )
                        })}
                    </div>
           </div>
        </div>
    )
}

export default HeaderCard