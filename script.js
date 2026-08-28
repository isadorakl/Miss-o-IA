const perguntas = [
  {
    pergunta: "Assim que sai da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ],
    resposta: [
      "Você acha que essa tecnologia pode ser perigosa.",
      "Você acredita que essa tecnologia pode transformar o futuro positivamente."
    ]
  },
  {
    pergunta: "Você acha que a IA deve ter limites éticos?",
    alternativas: [
      "Sim, para evitar abusos.",
      "Não, ela deve evoluir livremente."
    ],
    resposta: [
      "Você acredita que limites são essenciais para o uso responsável.",
      "Você pensa que a liberdade da IA pode trazer avanços sem limites."
    ]
  },
  {
    pergunta: "Quer usar a IA para ajudar na sua rotina?",
    alternativas: [
      "Sim, quero facilitar minha vida.",
      "Não, prefiro fazer tudo manualmente."
    ],
    resposta: [
      "Você valoriza a eficiência e praticidade.",
      "Você gosta do desafio de fazer tudo sozinho."
    ]
  }
];

let perguntaAtual = 0;
const respostasUsuario = [];

const perguntaElemento = document.querySelector('.pergunta');
const alternativasContainer = document.querySelector('.caixa-alternativas');
const resultadoDiv = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

function carregarPergunta() {
  alternativasContainer.innerHTML = '';
  resultadoDiv.style.display = 'none';

  const atual = perguntas[perguntaAtual];
  perguntaElemento.textContent = atual.pergunta;

  atual.alternativas.forEach((alt, index) => {
    const botao = document.createElement('button');
    botao.className = 'alternativa';
    botao.textContent = alt;
    botao.addEventListener('click', () => {
      respostasUsuario.push(index);
      mostrarResposta(index);
    });
    alternativasContainer.appendChild(botao);
  });
}

function mostrarResposta(index) {
  resultadoDiv.style.display = 'block';
  textoResultado.textContent = perguntas[perguntaAtual].resposta[index];

  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    setTimeout(() => {
      carregarPergunta();
    }, 2000);
  } else {
    setTimeout(() => {
      gerarHistoria();
    }, 2000);
  }
}

// Função que cria uma história com base nas respostas
function gerarHistoria() {
  const resposta1 = respostasUsuario[0];
  const resposta2 = respostasUsuario[1];
  const resposta3 = respostasUsuario[2];

  let historia = '';

  if (resposta1 === 0) {
    historia += "Você ficou assustado com a tecnologia e acha que ela pode ser perigosa. ";
  } else {
    historia += "Você ficou maravilhado com a tecnologia e acredita no seu potencial de transformação. ";
  }

  if (resposta2 === 0) {
    historia += "Você acredita que limites éticos são essenciais para evitar abusos. ";
  } else {
    historia += "Você pensa que a liberdade da IA pode trazer avanços sem limites, sem restrições. ";
  }

  if (resposta3 === 0) {
    historia += "Você quer usar a IA para facilitar sua rotina e valoriza a praticidade. ";
  } else {
    historia += "Você prefere fazer tudo manualmente e gosta do desafio de resolver por si mesmo.";
  }

  // Exibir história final
  perguntaElemento.textContent = 'Sua história:';
  textoResultado.textContent = historia;
  alternativasContainer.innerHTML = '';
  resultadoDiv.style.display = 'block';
}
 
// Inicia o quiz
carregarPergunta();
