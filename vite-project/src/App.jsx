import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import {Home} from './pages/Home';
import {Checkout} from './pages/Checkout';
import "./App.css";
import AuthProvider from "./context/AuthContext";
import Navbar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
    </AuthProvider>
  );
}

export default App;