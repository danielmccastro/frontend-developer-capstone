import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header";
import Main from "./pages/Main";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation"
import Footer from "./components/Footer";

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/booking" exact element={<Booking />} />
      <Route path="/confirmation" exact element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
