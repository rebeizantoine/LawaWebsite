import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Whychoose from "./Components/Whychoose";
import Howtoorder from "./Components/Howtoorder";
import Howpay from "./Components/Howpay";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Singleservice from "./Components/Singleservice";
import Frequently from "./Components/Frequently";
import Package from "./Components/Package";
import Modalpack from "./Components/Modalpack";
import ModalPreview from "./Components/ModalPreview";
import Modaljigga from "./Components/Modaljigga";
import ShowJigga from "./Components/Showjigga";
import Multipleboxesmodal from "./Components/Multipleboxesmodal";
import Showmodalbutton from "./Components/Showmemodal";
import Likeinsta from "./Components/Likeinsta";
import Frequentlyinsta from "./Components/Frequentlyinsta";
import ContactFormEmbed from "./Components/Contactformembed";
import Viewstiktok from "./Components/Viewstiktok";
import Frequentlytiktok from "./Components/Frequentlytiktok";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Services />
                <Whychoose />
                <Howtoorder />
                <Howpay />
                <Partners />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/sing"
            element={
              <>
                <Header />
                <Singleservice />
                <Package />
                <Frequently />

                <Services />

                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/likesinsta"
            element={
              <>
                <Header />
                <Likeinsta />
                <Package />
                <Frequentlyinsta />

                <Services />

                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/packmodal"
            element={
              <>
                {/* <Header /> */}
                <ModalPreview />
                {/* <Footer /> */}
              </>
            }
          ></Route>

          <Route
            path="/packmodal2"
            element={
              <>
                {/* <Header /> */}
                <ShowJigga />
                {/* <Footer /> */}
              </>
            }
          ></Route>
          <Route
            path="/mult"
            element={
              <>
                {/* <Header /> */}
                <Multipleboxesmodal />
                {/* <Footer /> */}
              </>
            }
          ></Route>
          <Route
            path="/222"
            element={
              <>
                {/* <Header /> */}
                <Showmodalbutton />
                {/* <Footer /> */}
              </>
            }
          ></Route>
          <Route
            path="/contactform"
            element={
              <>
                <Header />
                <ContactFormEmbed />
                {/* <Footer /> */}
              </>
            }
          ></Route>
          <Route
            path="/viewtiktok"
            element={
              <>
                <Header />
                <Viewstiktok />
                <Frequentlytiktok />
                {/* <Footer /> */}
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
