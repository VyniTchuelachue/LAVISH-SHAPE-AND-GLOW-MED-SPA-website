import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Home } from "@/pages/Home";
import { ReservationPage } from "@/pages/Reservation";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
        <Footer />
        <WhatsappButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
