import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Start from "./Components/Start";

function App() {
  return (    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Lista />} />                                             
        </Routes>
      </Router>         
  );
}

export default App;
