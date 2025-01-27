import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dinosaur } from "./pages/dinosaur.tsx";
import { DinosaurIndex } from "./pages/dinosaur-index.tsx";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DinosaurIndex />} />
      <Route path="/:selectedDinosaur" element={<Dinosaur />} />
    </Routes>
  </BrowserRouter>
)

export default App;
