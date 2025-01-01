import HeaderCard from "./HeaderCard"

const Header = () =>{
    return(
        <>
            <div className="p-4 gap-10 mx-5  mt-2  xl:justify-center flex overflow-auto bg-white">
                <HeaderCard 
                    image= "./images/Header images/Grocery.webp"
                    title= "Grocery"
                />
                <HeaderCard 
                    image= "./images/Header images/Mobiles.webp"
                    title= "Mobiles"
                />
                <HeaderCard
                    image="/images/Header images/Fashion.png"
                    title= "Fashion"
                    hasDropdown={true}
                    submenu={{
                        "Men's Top Wear" : {"All":"", "Men's T-Shirts":"", "Men's Casual Shirts":"","Men's Formal Shirts":"", "Men's Kurtas":"", "Men's Ethnic Sets":"", "men's Blazers":"","Men's Raincoat":"","Men's Windcheaters":"","Men's Suit":"","Men's Fabrics":""}, 
                        "Men's Bottom Wear":{"All":"","Men's Jeans":"","Men's Trackpants":"","Men's Shorts":""},
                        "Women Ethnic": {},
                        "Men Footwear": {},
                        "Women footwear": {},
                        "Watches and Accessories":{},
                        "Women Western":{},
                        "Bags, Suitcases & Luggage":{},
                        "Kids":{},
                        "Essentials":{},
                        "Winter":{}
                    }}
                />
                <HeaderCard
                    image="/images/Header images/Electronics.png"
                    title="Electronics"
                    hasDropdown={true}
                    submenu={{"Men's Top Wear" : {"All":"", "Men's T-Shirts":"", "Men's Casual Shirts":"","Men's Formal Shirts":""}, "Men's Bottom Wear":{"All":"","Men's Jeans":"","Men's Trackpants":"","Men's Shorts":""}}}
                />
                <HeaderCard
                    image="/images/Header images/Home.jpg"
                    title="Home & Furniture"
                    hasDropdown={true}
                    submenu={{"Men's Top Wear" : {"All":"", "Men's T-Shirts":"", "Men's Casual Shirts":"","Men's Formal Shirts":""}, "Men's Bottom Wear":{"All":"","Men's Jeans":"","Men's Trackpants":"","Men's Shorts":""}}}
                />
                <HeaderCard 
                    image= "./images/Header images/Appliances.webp"
                    title= "Appliances"
                />
                <HeaderCard 
                    image= "./images/Header images/Flight Bookings.webp"
                    title= "Flight Bookings"
                />

                <HeaderCard 
                    image= "./images/Header images/Beauty.png"
                    title= "Beauty,Toys & More"
                    hasDropdown={true}
                    submenu={{"Men's Top Wear" : {"All":"", "Men's T-Shirts":"", "Men's Casual Shirts":"","Men's Formal Shirts":""}, "Men's Bottom Wear":{"All":"","Men's Jeans":"","Men's Trackpants":"","Men's Shorts":""}}}
                />
                <HeaderCard 
                    image= "./images/Header images/Two Wheelers.png"
                    title= "Two Wheelers"
                    hasDropdown={true}
                    submenu={{"Men's Top Wear" : {"All":"", "Men's T-Shirts":"", "Men's Casual Shirts":"","Men's Formal Shirts":""}, "Men's Bottom Wear":{"All":"","Men's Jeans":"","Men's Trackpants":"","Men's Shorts":""}}}
                />
            </div>
        </>
    )
}

export default Header