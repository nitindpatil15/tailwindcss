import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Firstcard from "./component/Firstcard";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Secondcard from "./component/Secondcard";

function App() {
  return (
    <div className="bg-slate-200">
    <Router>
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/firstcard" element={<Firstcard/>} />
        <Route path="/secondcard" element={<Secondcard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
