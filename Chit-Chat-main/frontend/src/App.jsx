import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Chatpage from "./pages/Chatpage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatProvider from "./context/ChatProvider";
// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <div className="App">
      <Router>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/chats" element={<Chatpage />} />
          </Routes>
        </ChatProvider>
      </Router>
    </div>
  );
}

export default App;
