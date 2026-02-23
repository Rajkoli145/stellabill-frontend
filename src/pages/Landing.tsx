import {useState, useEffect}  from "react";
import LandingNavbar from '../components/LandingNavbar';
import {RecentActivity} from "../components/recentActivity";

export default function Landing() {
const [items, setItems] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setItems(MOCK_ITEMS), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <LandingNavbar />
      
      {/* Hero Section - Placeholder */}
      <main style={{ padding: '4rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: '3rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #22d3ee 0%, #14b8a6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome to Stellabill
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Decentralized subscription billing powered by blockchain technology
          </p>
        </div>

        {/* Sections for anchor links */}
        <section id="product" style={{ padding: '6rem 0', minHeight: '400px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem' }}>Product</h2>
          <p style={{ color: '#94a3b8' }}>Product information goes here...</p>
        </section>

        <section id="pricing" style={{ padding: '6rem 0', minHeight: '400px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem' }}>Pricing</h2>
          <p style={{ color: '#94a3b8' }}>Pricing information goes here...</p>
        </section>

        <section id="docs" style={{ padding: '6rem 0', minHeight: '400px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem' }}>Documentation</h2>
          <p style={{ color: '#94a3b8' }}>Documentation goes here...</p>
        </section>

        <section id="contact" style={{ padding: '6rem 0', minHeight: '400px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p style={{ color: '#94a3b8' }}>Contact information goes here...</p>
        </section>
      </main>
   
    </div>
  )
}
