import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StoryPage from "./stories/StoryPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </Router>
  );
}

export default App
