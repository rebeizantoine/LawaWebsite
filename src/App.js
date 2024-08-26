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
import MultipleBoxesModal from "./Components/Multipleboxesmodal";
import Showmodalbutton from "./Components/Showmemodal";
import Likeinsta from "./Components/Likeinsta";
import Frequentlyinsta from "./Components/Frequentlyinsta";
import ContactFormEmbed from "./Components/Contactformembed";
import Viewstiktok from "./Components/Viewstiktok";
import Frequentlytiktok from "./Components/Frequentlytiktok";
import Howtoordertiktok from "./Components/Howtoordertiktok";
import Liketiktok from "./Components/Liketiktok";
import Howtoordertiktoklike from "./Components/Howtoordertiktoklike";
import Liketwitter from "./Components/Liketwitter";
import Howtoordertwitterlike from "./Components/Howtoordertwitterfollower";
import Frequentlytwitter from "./Components/Frequentlytwitter";
import Followertwitter from "./Components/Followertwitter";
import Howtoordertwitterfollower from "./Components/Howtoordertwitterfollower";
import Frequentlytwitterfollower from "./Components/Frequentlytwitterfollower";
import Frequentlyinstaview from "./Components/Frequentlyinstaview";
import Viewsinsta from "./Components/Viewsinsta";
import Commentsinsta from "./Components/Commentsinsta";
import Frequentlyinstacomments from "./Components/Frequentlyinstacomments";
import Commentstiktok from "./Components/Commentstiktok";
import Commentstwitter from "./Components/Commentstwitter";
import Frequentlytwittercomments from "./Components/Frequentlytwittercomments";
import Viewstwitter from "./Components/Viewstwitter";
import FrequentlyTwitterComments from "./Components/Frequentlytwitterview";
import OrderSummary from "./Components/Ordersummary";
import Followertiktok from "./Components/Followertiktok";
import { CartProvider } from "./Components/Cartcontext";

function App() {
  return (
    <div className="App">
      <CartProvider>
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
                  <Package />
                  <Howpay />
                  <Partners />
                  <Footer />
                </>
              }
            />
            <Route
              path="/followerinstagram"
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
            />
            <Route
              path="/followertiktok"
              element={
                <>
                  <Header />
                  <Followertiktok />
                  <Package />
                  <Frequentlytiktok />
                  <Services />
                  <Footer />
                </>
              }
            />
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
            />
            <Route
              path="/Viewsinsta"
              element={
                <>
                  <Header />
                  <Viewsinsta />
                  <Howtoorder />
                  <Frequentlyinstaview />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Viewstwitter"
              element={
                <>
                  <Header />
                  <Viewstwitter />
                  <Howtoorder />
                  <FrequentlyTwitterComments />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Commentsinsta"
              element={
                <>
                  <Header />
                  <Commentsinsta />
                  <Howtoorder />
                  <Frequentlyinstacomments />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Commentstiktok"
              element={
                <>
                  <Header />
                  <Commentstiktok />
                  <Howtoordertiktok />
                  <Frequentlytiktok />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Commentstwitter"
              element={
                <>
                  <Header />
                  <Commentstwitter />
                  <Howtoordertwitterfollower />
                  <Frequentlytwittercomments />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/packmodal"
              element={
                <>
                  <ModalPreview />
                </>
              }
            />
            <Route
              path="/packmodal2"
              element={
                <>
                  <ShowJigga />
                </>
              }
            />
            <Route
              path="/mult"
              element={
                <>
                  <MultipleBoxesModal />
                </>
              }
            />
            <Route
              path="/order"
              element={
                <>
                  <Header />
                  <OrderSummary />
                  <Footer />
                </>
              }
            />
            <Route
              path="/222"
              element={
                <>
                  <Showmodalbutton />
                </>
              }
            />
            <Route
              path="/contactform"
              element={
                <>
                  <Header />
                  <ContactFormEmbed />
                </>
              }
            />
            <Route
              path="/viewtiktok"
              element={
                <>
                  <Header />
                  <Viewstiktok />
                  <Howtoordertiktok />
                  <Frequentlytiktok />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/liketiktok"
              element={
                <>
                  <Header />
                  <Liketiktok />
                  <Howtoordertiktoklike />
                  <Frequentlytiktok />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/liketwitter"
              element={
                <>
                  <Header />
                  <Liketwitter />
                  <Howtoordertwitterlike />
                  <Frequentlytwitter />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/followertwitter"
              element={
                <>
                  <Header />
                  <Followertwitter />
                  <Howtoordertwitterfollower />
                  <Frequentlytwitterfollower />
                  <Services />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
