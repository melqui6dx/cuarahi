import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // useEffect para actualizar el año si es necesario (aunque usualmente no cambia durante la sesión)
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-800 text-white text-center p-6 mt-12">
            <p>&copy; {currentYear} Melquisedec C. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-400">Cuarahí EduSpace</p>
        </footer>
    );
};
export default Footer;
