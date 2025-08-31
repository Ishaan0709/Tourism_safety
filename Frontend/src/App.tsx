import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LiveMap from "./pages/LiveMap";
import Alerts from "./pages/Alerts";
import EFirDrafts from "./pages/EFirDrafts";
import TouristProfile from "./pages/TouristProfile";
import Geofences from "./pages/Geofences";
import AnomalySettings from "./pages/AnomalySettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<LiveMap />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/efir" element={<EFirDrafts />} />
          <Route path="/tourists/:tid" element={<TouristProfile />} />
          <Route path="/fences" element={<Geofences />} />
          <Route path="/anomaly" element={<AnomalySettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;