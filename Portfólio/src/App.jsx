// Importa o módulo React do pacote react
import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/home';
// Importa o componente Sobre da pasta 'pages'
import Sobre from './pages/sobre';
// Define a função do componente principal App
import Mtm from './pages/matematica';
import Ntz from './pages/natureza';
function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
      {/* Define as rotas usando o componente Routes */}
      <Routes>
        {/* Rota para a página Home com o componente associado */}
        <Route path="/" element={<Home />} />        
       {/* Rota para a página About com o componente associado */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/mtm" element={<Mtm />} />
        <Route path="/ntz" element={<Ntz />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
