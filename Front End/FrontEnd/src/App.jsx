// import ProductCard from "./Components/ProductCard"
import TopNav from "./Components/TopNav"
import Homepage from "./Components/Home page/Homepage"
import Footer from "./Components/Footer"
import Category from "./Components/Category page/Category"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="bg-slate-100">
      <TopNav />
      
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path = '/category' element = {<Category />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
