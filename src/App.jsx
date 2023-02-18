import "./App.css";
import { Navbar } from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
