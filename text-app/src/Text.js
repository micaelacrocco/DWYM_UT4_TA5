import React, { useState } from 'react';
import './Text.css';

function App() {
    const [mostrarTexto, setMostrarTexto] = useState(false);

    const alternarTexto = () => {
        setMostrarTexto(!mostrarTexto);
    };

    return (
        <div>
            {mostrarTexto && <p>¡Este es el texto que aparece y desaparece!</p>}
            <button onClick={alternarTexto}>
                {mostrarTexto ? 'Ocultar texto' : 'Mostrar texto'}
            </button>
        </div>
    );
}

export default App;
