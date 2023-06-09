import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <<Main />*/}
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;
