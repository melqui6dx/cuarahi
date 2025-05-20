const Payments = () => {
    const handLeSolicitarClase = () => {
        const numeroWhatsapp = "59167805407"; // Incluye el código de país (591 para Bolivia)
        const mensaje = "¡Hola! Estoy interesado en una clase individual. ¿Podrían proporcionarme más detalles sobre la disponibilidad y el proceso? ¡Gracias!";
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsapp, '_blank');
    };
    const handLeContratarPaquete = () => {
        const numeroWhatsapp = "59167805407"; // Incluye el código de país (591 para Bolivia)
        const mensaje = "¡Hola! Estoy interesado en contratar un paquete grupal. ¿Podrían proporcionarme más detalles sobre la disponibilidad y el proceso? ¡Gracias!";
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsapp, '_blank');
    };

    return (
        <section id="pagos" className="content-section flex grow">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700 border-b-2 border-indigo-200 pb-2">Información de Pago</h2>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tarifas y Métodos de Pago</h3>
                <p className="text-gray-700 mb-6">
                    Ofrezco diferentes paquetes y opciones para adaptarme a tus necesidades. Aquí encontrarás los detalles sobre mis tarifas y cómo puedes realizar los pagos por las clases o material.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Opción de Tarifa 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Clase Individual</h4>
                        <p className="text-3xl font-bold text-gray-800 mb-1">Bs.35 <span className="text-sm font-normal text-gray-500">/ hora</span></p>
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                            <li>Sesión personalizada</li>
                            <li>Resolución de dudas específicas</li>
                            <li>Adaptado a tu ritmo</li>
                        </ul>
                        <button

                            onClick={handLeSolicitarClase}
                            className="w-full bg-green-500 hover:bg-green-600 text-white 
                            font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out 
                            focus:outline-none focus:ring-2 focus:ring-green-400"
      
                        >
                            Solicitar Clase
                        </button>
                    </div>

                    {/* Opción de Tarifa 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Paquete Grupal</h4>
                        <p className="text-3xl font-bold text-gray-800 mb-1">Bs.17  <span className="text-sm font-normal text-gray-500">/ hora</span></p>
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                            <li>Disponible desde 3 alumnos</li>
                            <li>Dinámicas de grupo</li>
                            <li>Soporte continuo entre compañeros</li>
                        </ul>
                        <button 
                        
                            onClick={handLeContratarPaquete}
                        className="w-full bg-green-500 hover:bg-green-600 text-white 
                        font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out 
                        focus:outline-none focus:ring-2 focus:ring-green-400">Contratar Paquete

                        </button>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Métodos de Pago Aceptados:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Transferencia Bancaria (Detalles por privado)</li>
                        <li>PayPal: <a href="https://paypal.me/melqui6dx?country.x=CL&locale.x=es_XC" className="text-indigo-500 hover:underline">paypal.me</a></li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-500">
                        Para coordinar el pago o si tienes alguna consulta, no dudes en contactarme.
                    </p>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-700"><strong className="font-semibold">Importante:</strong> Los pagos deben realizarse antes de iniciar las clases o al momento de adquirir el material, según lo acordado.</p>
                </div>
            </div>
        </section>
    );
};
export default Payments;