const Header = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'ejercicios', label: 'Ejercicios TP1: Elipses' },
        { id: 'sobre-mi', label: 'Sobre Mí' },
        { id: 'pagos', label: 'Información de Pago' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
                        Cuarahí EduSpace
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-1 sm:space-x-2">
                        {navItems.map(item => (
                            <button 
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`nav-link text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                                    activeSection === item.id 
                                    ? 'bg-indigo-600 text-white' 
                                    : 'text-gray-700 hover:bg-indigo-500 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;