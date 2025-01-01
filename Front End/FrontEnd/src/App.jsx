// import ProductCard from "./Components/ProductCard"
import TopNav from "./Components/TopNav"
import Header from "./Components/Header"
import Products from "./Components/Products"
import SlideCard from "./Components/SlideCard"
import Footer from "./Components/Footer"


function App() {

  return (
    <div className="bg-slate-100">
      <TopNav />
      <Header />
      <SlideCard 
        images={["/images/SliderImages/Flight2.jpg", 
          "/images/SliderImages/Mobiles.jpg", "/images/SliderImages/Flight.jpg", "/images/SliderImages/Flight3.png"]}
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

      <Products 
        Category="Best of Electronics"
        itemlist={[
          {image : "/images/Electronics/Buds.webp", content: "Best Truewiireless ...", heading: "Grab Now"},
          {image : "/images/Electronics/Monitors.jpg", content: "Monitors", heading: "From ₹7949"},
          {image : "", content: "", heading: ""},
          {image : "", content: "", heading: ""}
        ]}
      />


      <Footer />
    </div>
  )
}

export default App
