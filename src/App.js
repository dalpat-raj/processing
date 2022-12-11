import "./App.scss";


import Navbar from "./components/Navbar";
import Top__Navbar from "./components/Top__Navbar";
import DemoCarousel from "./components/Herosection";

function App() {
  return (
    <div className="App">
      <Top__Navbar />
      <Navbar />
      <DemoCarousel />
    </div>
  );
}

export default App;
