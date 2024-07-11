import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import DivState from "./components/DivState";
import CountryState from "./components/CountryState";
import ImgState from "./components/ImgState";


function App() {
  return<>
  <ImgState/>
  </>
  // return <>
  // <Routes>
  //   <Route path="/" element={<HomePage/>}/>
  //   <Route path="/about" element={<AboutPage/>}/>
  //   <Route path="/contact" element={<ContactPage/>}/>
  //   <Route path="*" element={<NotFound/>}/>
  // </Routes>
  // </>
}

export default App;
