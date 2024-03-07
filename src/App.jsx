
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar";
import Projectsss from "./pages/Projectsss";






export default function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Index/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Projectsss" element={<Projectsss/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
