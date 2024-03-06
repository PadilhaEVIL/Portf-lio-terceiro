// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Home
function home() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClickSobre = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/sobre');
  };
  const handleClickMtm = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/Mtm');
  };
  const handleClickNtz = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/Ntz');
  };
  const handleClickHms = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/Hms');
  }
    const handleClickLgs = () => {  
      // Navegar para a página Sobre ao clicar em algum botão
      irPara('/Lgs');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div>
      {/* Título da página inicial */}
      <h1>Portfólio 1 trimestre</h1>      
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClickSobre}>Carta De Apresentação</button> &nbsp;
      <button onClick={handleClickMtm}>Matemática</button> &nbsp;
      <button onClick={handleClickNtz}>Natureza</button> &nbsp;
      <button onClick={handleClickHms}>Humanas</button> &nbsp;
      <button onClick={handleClickLgs}>Linguagens</button>
    </div>
  );
  }
// Exporta o componente Home como padrão
export default home;
