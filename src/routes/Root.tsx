import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"

const Root = () => {
  return (
    <div className="App">
      <div className="promo">Get 10% Off- Use Coupon Code HAPPY123</div>
      <div className="header">
        <h1 className="header-1">happy kids</h1>
        <Navbar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root