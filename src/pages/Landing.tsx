import React from 'react';
import Hero from '../components/Landing/Hero';

const Landing: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#020b0d', minHeight: '100vh' }}>
            <Hero />
            {/* Future sections like features, testimonials, etc. can be added here */}
        </div>
    );
};

export default Landing;
