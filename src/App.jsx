import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ExerciseSection from './Sections/ExcerciseSection.jsx';
import AboutMe from './Sections/AboutMe.jsx';
import Payments from './Sections/Payment.jsx';
import 'katex/dist/katex.min.css'; 

function App() {
    const [activeSection, setActiveSection] = useState('ejercicios'); // Sección activa por defecto

    // Función para renderizar la sección activa
    const renderActiveSection = () => {
        switch (activeSection) {
            case 'ejercicios':
                return <ExerciseSection />;
            case 'sobre-mi':
                return <AboutMe />;
            case 'pagos':
                return <Payments />;
            default:
                return <ExerciseSection />;
        }
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
            
            {/* El enlace a Google Fonts se puede mantener aquí o moverlo al index.html de tu proyecto Vite */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            
            <main className="container mx-auto px-4 sm:px-6 py-8 flex-grow flex-col">
                {renderActiveSection()}
            </main>
            
            <Footer />
        </div>
    );
}

export default App;


