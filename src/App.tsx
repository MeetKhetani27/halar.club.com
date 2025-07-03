import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import SafarisBlog from './pages/blog/SafarisBlog';
import EventsBlog from './pages/blog/EventsBlog';
import MoonNightRideBlog from './pages/blog/MoonNightRideBlog';
import GamesBlog from './pages/blog/GamesBlog';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600); // 600ms delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="blog">
          <Route path="safaris" element={<SafarisBlog />} />
          <Route path="events" element={<EventsBlog />} />
          <Route path="moon-night-rides" element={<MoonNightRideBlog />} />
          <Route path="games" element={<GamesBlog />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;