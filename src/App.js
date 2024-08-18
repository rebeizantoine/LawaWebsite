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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
