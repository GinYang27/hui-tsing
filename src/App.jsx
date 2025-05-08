import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Story1 from "./stories/Story1";
import Story2 from "./stories/Story2";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const photos = [
    {
      src: "https://jinstaticasset.blob.core.windows.net/photos/Screenshot 2025-04-30 at 4.13.30 PM.png",
      alt: "Azure Blob Screenshot",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
      </Routes>
    </Router>
  );
}

export default App
