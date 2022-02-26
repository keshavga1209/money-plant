
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Process from "./Components/Process";
import Testemonial from "./Components/Testemonial";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Process />
      <Testemonial />
      <Footer />
    </div>
  );
}

export default App;
