import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.css";
import MiniKitProvider from "./components/MiniProvider";
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
