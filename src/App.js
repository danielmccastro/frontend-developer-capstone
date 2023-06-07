import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    {/* <Main /> */}
    <Form />
    <Footer />
    </>
  );
}

export default App;
