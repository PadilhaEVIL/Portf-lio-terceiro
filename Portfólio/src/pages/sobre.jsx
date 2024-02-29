// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Sobre
function Sobre() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Home ao clicar em algum botão
    irPara('/');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div>
      {/* Título da página inicial */}
      <h1>Página Sobre</h1>      
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Home</button>
      <h2>Sobre mim:</h2>
      <h3 className='sobre'>Meu nome é João Vitor Dandolini Carvalho tenho 17 anos, nasci em Florianópolis(SC) cresci em Tubarão(SC), atualmente estou no segundo ano do ensino médio do curso técnico de desenvolvimento de sistemas do Senai.
	Pretendo trabalhar com algo relacionado ao técnico e seguir carreira com isso, ou então fazer uma faculdade de psicologia, mas meu maior sonho é ser Jogador Profissional de algum jogo, e ficar famoso com isso.
	Falando  mais um  pouco sobre mim, gosto muito de jogos em geral, meus jogos favoritos são: Csgo e Valorant. Gosto bastante de Natação e Ciclismo, tenho 2 gatos, o Pipito e a Charlotte, gosto muito de animes e a cultura Geek em geral, escuto um pouco de tudo, mas meus artistas favoritos são o 7 minutoz/Lucas A.R.T e o Lil nas X, sou ambivertido, converso sobre tudo sou um ótimo conselheiro e um ótimo amigo, sou aquela pessoa que você pode confiar.</h3>
    <img src="src/assets/satoru.gif" alt="" />
    </div>
  );
}
// Exporta o componente Home como padrão
export default Sobre;

