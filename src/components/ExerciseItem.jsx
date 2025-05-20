import React, { useState } from 'react';
import 'katex/dist/katex.min.css'; 
import { InlineMath, BlockMath } from 'react-katex';

const renderTextWithInlineMath = (text) => {
    if (typeof text !== 'string') {
        return text; // Return as is if not a string
    }
    const parts = text.split('$');
    return parts.map((part, index) => {
        if (index % 2 === 1) {
            // Odd parts are math expressions
            return <InlineMath key={index} math={part} />;
        }
        // Even parts are regular text
        return part;
    });
};

// Componente para un ítem de ejercicio individual
const ExerciseItem = ({ title, statement, solution }) => {
    const [showSolution, setShowSolution] = useState(false);

    const toggleSolution = () => {
        setShowSolution(!showSolution);
    };

    return (
        <div className="exercise-item mb-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
            
            {/* Renderizar el enunciado con KaTeX para fórmulas en línea */}
            <p className="text-gray-600 mb-3">
                {renderTextWithInlineMath(statement)}
            </p>
            
            <button 
                onClick={toggleSolution} 
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-3"
            >
                {showSolution ? 'Ocultar Solución' : 'Mostrar Solución'}
            </button>
            {showSolution && (
                <div className="solution mt-4 p-4 bg-gray-100 rounded-md border-l-4 border-indigo-500">
                    <p className="font-semibold text-gray-700 mb-2">Solución:</p>
                    {/* Renderizar la solución iterando sobre el array de objetos */}
                    {solution.map((item, index) => {
                        if (item.type === 'text') {
                            // Renderizar texto, permitiendo también fórmulas en línea dentro del texto de la solución
                            return <p key={index} className="text-gray-700 mb-1">{renderTextWithInlineMath(item.content)}</p>;
                        } else if (item.type === 'block') {
                            return <BlockMath key={index} math={item.math} />;
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
};
export default ExerciseItem;