import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hoome } from "./pages/Hoome";
//import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hoome />} />
      </Routes>
    </>
  );
}

export default App;
