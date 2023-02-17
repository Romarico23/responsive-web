import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router basename={window.location.pathname || ""}>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
