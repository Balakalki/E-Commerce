import Header from "./Header Section/Header"
import Products from "./Product container/Products"
import SlideCard from "./SlideCard"


export default function Homepage(){
    return(
        <>
            <Header />
            <SlideCard 
                images={["/images/SliderImages/Flight2.jpg", 
                "/images/SliderImages/Mobiles.jpg", "/images/SliderImages/Flight.jpg", "/images/SliderImages/Flight3.png"]}
            />

            <Products 
            Category="Best of Electronics"
            itemlist={[
                {image : "/images/Electronics/Buds.webp", content: "Best Truewiireless ...", heading: "Grab Now", brand: "brand"},
                {image : "/images/Electronics/Monitors.jpg", content: "Monitors", heading: "From ₹7949", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"},
                {image : "/Temp.jpg", content: "Temparery", heading: "Temp", brand: "brand"}
            ]}
            />
            <Products 
                Category="Best of Electronics"
                itemlist={[
                {image : "/images/Electronics/Buds.webp", content: "Best Truewiireless ...", heading: "Grab Now"},
                {image : "/images/Electronics/Monitors.jpg", content: "Monitors", heading: "From ₹7949"},
                {image : "", content: "", heading: ""},
                {image : "", content: "", heading: ""}
                ]}
            />

            <Products 
                Category="Best of Electronics"
                itemlist={[
                {image : "/images/Electronics/Buds.webp", content: "Best Truewiireless ...", heading: "Grab Now"},
                {image : "/images/Electronics/Monitors.jpg", content: "Monitors", heading: "From ₹7949"},
                {image : "", content: "", heading: ""},
                {image : "", content: "", heading: ""}
                ]}
            />
        </>
    )
}