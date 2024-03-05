import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import NavbarComponent from "./components/NavbarComponent"





function App() {

  return (
    <>
     <NavbarComponent/>
     
     <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>

     </Routes>
    </>
  )
}

export default App
