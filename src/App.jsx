import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";

function App() {
  return (
    <div id="container" className="smartphone:ct-sm desktop:ct-lg">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Lista />} />                                             
        </Routes>
      </Router>
    </div>
  );
}

export default App;
