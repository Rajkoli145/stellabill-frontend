import React from 'react';
import Hero from '../components/Landing/Hero';
import LandingHeader from '../components/Landing/LandingHeader';

const Landing: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#020b0d', minHeight: '100vh', position: 'relative' }}>
            <LandingHeader />
            <Hero />
            {/* Future sections like features, testimonials, etc. can be added here */}
        </div>
    );
};

export default Landing;
