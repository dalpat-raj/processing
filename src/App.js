import "./App.scss";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from "./components/Navbar";
import Top__Navbar from "./components/Top__Navbar";
import Hero__Section from "./components/Herosection";
import Menu__bar from "./components/Menu__bar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Top__Navbar />
      <Navbar />
      <Menu__bar/>
        <Routes>
          <Route path="/" element={<Hero__Section />} />
          <Route path="/shop" />
          <Route path="/shop__detail"/>
          <Route path="/pages"/>
          <Route path="/contact"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
