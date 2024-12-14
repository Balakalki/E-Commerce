

const TopNav = () =>{
    return(
        <>
        <div className="w-full flex h-12 p-2 justify-between bg-blue-100">

            {/* logo */}
            <div>
                <h1 className=" text-2xl text-blue-900 font-bold"> Flipkart</h1>
            </div>

            {/* search box */}
            <div className=" h-full flex">
                <button>
                    <img className="h-full p-1 w-8 rounded-s bg-white" src="/images/search.png" alt="se" />
                </button>
                <input className="w-80 h-full rounded-r-sm p-1" type="text" placeholder="Search" />
            </div>

            {/* cart and account */}
            <div className="flex gap-5 pr-5">
                <img className="h-full w-10" src="/images/user.png" alt="act" />
                <img className="h-full w-10" src="/images/shopping-cart.png" alt="cart" />
            </div>
        </div>
        </>
    )
}

export default TopNav;