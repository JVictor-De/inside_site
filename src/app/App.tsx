import { Toaster } from "./components/ui/sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Metodologia } from "./pages/Metodologia";
import { Resultados } from "./pages/Resultados";
import { QuemSomos } from "./pages/QuemSomos";
import { Diagnostico } from "./pages/Diagnostico";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
