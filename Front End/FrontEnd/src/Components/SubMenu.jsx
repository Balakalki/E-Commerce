import { useState } from "react"

const Submenu = ({value, submenuobj}) =>{

    const [onHover, setOnHover] = useState(false)
    const keys = Object.keys(submenuobj)

    const onHoverTrue = () =>{
        setOnHover(true)
    }
    const onHoverFalse = () =>{
        setOnHover(false)
    }


    return(
        <div className="flex"
            onMouseEnter={onHoverTrue}
            onMouseLeave={onHoverFalse}>
            <div className={`py-2 relative left-[-50%] pl-10 w-full pr-2 hover:bg-slate-200 hover:font-semibold bg-white`}>
                {value}
            </div>
            <div className={`${onHover ? '' : 'hidden'}  bg-white absolute w-full top-0 left-[50%] px-10 shadow-md shadow-black z-20`}>
                
                {keys.map((val, ind) =>{
                    return(
                        // should redirect to submenuobj.val
                        <div className="py-2 hover:text-[0.91rem] hover:font-semibold" key = {ind} onClick={submenuobj.val}> {val} </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Submenu