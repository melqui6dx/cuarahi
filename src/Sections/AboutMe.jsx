const AboutMe = () => (
    <section id="sobre-mi" className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 border-b-2 border-indigo-200 pb-2">Sobre Mí</h2>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img 
                    src="\profile_Melqui.webp" 
                    alt="Foto de perfil" 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mr-0 sm:mr-8 mb-4 sm:mb-0 object-cover border-4 border-indigo-200"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/FFFFFF?text=Error"; }}
                />
                <div>
                    <h3 className="text-2xl font-semibold text-indigo-600">Melquisedec Carrasco</h3>
                    <p className="text-gray-500 mb-4">Tutor Online/Presencial</p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        ¡Hola! Soy Melquisedec Carrasco, y me apasiona impulsar a los estudiantes hacia sus metas académicas. 
                        Con 3 años de experiencia como auxiliar de cátedra en la UAGRM y dando clases particulares, enseño 
                        Física, Matemáticas, Programación e inglés. Mi enfoque hace el aprendizaje accesible, interesante y efectivo.

                        Aquí encontrarás material de apoyo, ejercicios resueltos y una vía directa para contactarme por clases particulares 
                        o resolución de dudas. ¡Vamos a potenciar tu éxito juntos!
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Aquí encontrarás material de apoyo, ejercicios resueltos y una forma directa de contactarme
                        para clases particulares o resolución de dudas.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Especialidades:</strong> Matemáticas, Física, Programación e Inglés. Nivel Secundario y Universitario.
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t pt-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-3">Mi Metodología</h4>
                <p className="text-gray-600 mb-2">
                    ¡Mi Metodología: Despierta Tu Potencial!
                    Mi enseñanza combina aprendizaje basado en problemas, explicaciones claras y concisas y práctica constante para que descubras y potencies tu talento único. 
                    ¡Cada paso te acerca a tu mejor versión!
                </p>
                <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Contacto</h4>
                <p className="text-gray-600">
                    Puedes contactarme a través de: <a href="carrascomelquisedec3@gmail.com" className="text-indigo-500 hover:underline">Mail </a>
                     o <a href="https://wa.me/59169203835" className="text-indigo-500 hover:underline">WhatsApp</a>.
                </p>
            </div>
        </div>
    </section>
);
export default AboutMe;