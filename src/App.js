import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GrowTokenFeatures from './pages/index';
import TextPage from './pages/TextPage';
import CarouselPage from './pages/CarouselPage';
import MindMapPage from './pages/MindMapPage';
import InteractiveCollagePage from './pages/InteractiveCollagePage';
import Text from './pages/Text'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GrowTokenFeatures />} />
        <Route path="/text-page" element={<TextPage />} />
        <Route path="/carousel-page" element={<CarouselPage />} />
        <Route path="/mind-map-page" element={<MindMapPage />} />
        <Route path="/interactive-collage-page" element={<InteractiveCollagePage />} />
        <Route path="/text" element={<Text />} />

      </Routes>
    </Router>
  );
}

export default App;
