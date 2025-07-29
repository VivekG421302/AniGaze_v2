import "./styles/App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dummy556 from "./components/Dummy556";
import Player from "./pages/Player";
import Admin from "./pages/Admin";
import UploadTester from "./pages/UploadTester";
import BufferPlayer from "./Dump/BufferPlayer";
import Colour from "./pages/Colour";

function App() {
  return (
    // <Scroller/>
    // <Dummy556/>
    // <UploadTester />
    // <Player/>
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/work" element={<Dummy556/>} />
        <Route path="/watch" element={<Player/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/test" element={<UploadTester/>} />
        <Route path="/buff" element={<BufferPlayer/>} />
        <Route path="/colour" element={<Colour/>} />
      </Routes>
    </Router>
  );
}

export default App;
