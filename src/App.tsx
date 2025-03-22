import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
import MiniKitProvider from "./components/MiniProvider";
import { MainSection } from "./components/MainSection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
function App() {
  return (
    <>
      <MiniKitProvider>

        <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>

        <Footer />
        </Router>
      </MiniKitProvider>
    </>
  );
}

export default App;
