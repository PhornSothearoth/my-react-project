import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Read from "./pages/Read";
import About from "./pages/About";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <MyFooter />
    </>
  );
}
export default App;
