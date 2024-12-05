import Cover from "../components/Cover"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <Cover />
      <Services />
      <Products />
      <About />
      <Contact />
    </>
  )
}

export default Home