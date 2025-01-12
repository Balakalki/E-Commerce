import { useState } from "react";


const TopNav = () =>{
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const [menuDropdown, setMenuDropdown] = useState(false);

    const menuDropdownTrue = ()=>{
        setMenuDropdown(true);
    }

    const menuDropdownFalse = ()=>{
        setMenuDropdown(false);
    }

    const DropdownTrue = () =>{
        setIsDropdownVisible(true)
    }
    const DropdownFalse = () =>{
        setIsDropdownVisible(false)
    }

    return(
        <>
        <div className=" bg-white text-lg w-full flex h-16 p-2 justify-between border-b-black border  pr-10">

            {/* logo */}
            <div>
                <img src="/images/Nav/flipkart.svg" alt="img" />
            </div>

            {/* search box */}
            <div className=" border rounded-md border-blue-100 hidden my-1 md:flex">
                <button className="bg-blue-50">
                    <img className=" p-1 w-8 rounded-s" src="/images/Nav/search.png" alt="se" />
                </button>
                <input className="bg-blue-50 md:w-80 lg:w-[30rem] [@media(min-width:1200px)]:w-[38rem]  rounded-r-sm p-1" type="text" placeholder="Search for Products, Brands and More" />
            </div>

            {/* cart and account */}
            <div className="flex gap-12 items-center">
                <div className="">
                    <button className={`p-1 flex items-center rounded-md ${isDropdownVisible? 'bg-blue-500 text-white': ''} gap-2 `}
                        onMouseEnter={DropdownTrue}
                        onMouseLeave={DropdownFalse}
                        
                    > 
                        <img className="h-4 w-4" src="/images/Nav/user.png" alt="act" />
                        <h2>Login</h2>
                        <span className={` transition-transform duration-500 transform ${isDropdownVisible ? "" : "rotate-180 "}`}>
                        ^
                        </span>
                    </button>

                    {/* Dropdown */}
                    <div className={` text-base absolute z-10 rounded-b-lg bg-white shadow-md shadow-[rgb(47,47,47)] py-2 ${isDropdownVisible? '': 'hidden'}`}
                        onMouseEnter={DropdownTrue}
                        onMouseLeave={DropdownFalse}
                    >
                        <div className="flex gap-10 pb-3 px-4">
                            <div>New Customer?</div>
                            <div className="text-blue-600 font-semibold">Sing Up</div>
                        </div>
                        <hr />
                        <div className="px-4 flex flex-col gap-5 py-2 text-sm">
                            <div className ="flex gap-2 pt-1">
                                <img src="/images/Nav/LogIn/My Profile.svg" alt="img" />
                                <p>My Profile</p>
                            </div>
                            <div className ="flex gap-2">
                                <img src="/images/Nav/LogIn/fkplus.svg" alt="img" />
                                <p>Flipkart Plus Zone</p>
                            </div>
                            <div className ="flex gap-2">
                                <img src="/images/Nav/LogIn/Orders.svg" alt="img" />
                                <p>Orders</p>
                            </div>
                            <div className ="flex gap-2">
                                <img src="/images/Nav/LogIn/" alt="img" />
                                <p>Wishlist</p>
                            </div>
                            <div className ="flex gap-2">
                                <img src="/images/Nav/LogIn/Rewards.svg" alt="img" />
                                <p>Rewards</p>
                            </div>
                            <div className ="flex gap-2">
                                <img src="/images/Nav/LogIn/Gift Cards.svg" alt="img" />
                                <p>Gift Cards</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <button className="flex gap-2 items-center">
                    <img className="h-4 w-4" src="/images/Nav/shopping-cart.png" alt="cart" />
                    <h2 className="hidden [@media(min-width:1200px)]:flex">Cart</h2>
                </button>
                <button className="md:flex gap-2 hidden items-center">
                    <img className="h-5 w-5" src="/images/Nav/Store.png" alt = "seller" />
                    <h2 className="hidden [@media(min-width:1200px)]:flex">Become a Seller</h2>
                </button>

                <div className="relative">
                    <div className={`${menuDropdown? ' bg-slate-50':' border-white'} border md:flex rounded-md p-[0.35rem]`}
                    onMouseEnter={menuDropdownTrue}
                    onMouseLeave={menuDropdownFalse}>
                        <img src="/images/Nav/Menu.svg" alt="img" />
                    </div>
                    <div className={`${menuDropdown?'':'hidden'} w-[17rem] flex flex-col rounded-b-lg shadow-lg rounded-t-sm z-10 absolute right-0  bg-white  border `}
                    onMouseEnter={menuDropdownTrue}
                    onMouseLeave={menuDropdownFalse}>
                            <div className="flex hover:bg-slate-50 py-2 pl-5  items-center  gap-5">
                                <img className="h-4" src="/images/Nav/Menu/Notifications.svg" alt="img" />
                                <p className="text-[0.9rem]">Notification Preferences</p>
                            </div>
                            <div className="flex hover:bg-slate-50 py-2 pl-5  gap-5">
                                <img className="h-4" src="/images/Nav/Menu/helpcenter.svg" alt="img" />
                                <p className="text-[0.9rem]">24x7 Customer Care</p>
                            </div>
                            <div className="flex hover:bg-slate-50 py-2 pl-5  gap-5">
                                <img className="h-4" src="/images/Nav/Menu/advertise.svg" alt="img" />
                                <p className="text-[0.9rem]">Advertise</p>
                            </div>
                            <div className="flex hover:bg-slate-50 py-2 pl-5  gap-5">
                                <img className="h-4" src="/images/Nav/Menu/downloadApp.svg" alt="img" />
                                <p className="text-[0.9rem]">Download App</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopNav;