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

const perguntaElemento = document.querySelector('.pergunta');
const alternativasContainer = document.querySelector('.caixa-alternativas');
const resultadoDiv = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

function carregarPergunta() {
  // Limpa alternativas anteriores
  alternativasContainer.innerHTML = '';

  // Esconde resultado
  resultadoDiv.style.display = 'none';

  // Carrega pergunta atual
  const atual = perguntas[perguntaAtual];
  perguntaElemento.textContent = atual.pergunta;

  // Cria botões para alternativas
  atual.alternativas.forEach((alt, index) => {
    const botao = document.createElement('button');
    botao.className = 'alternativa';
    botao.textContent = alt;
    botao.addEventListener('click', () => {
      mostrarResposta(index);
    });
    alternativasContainer.appendChild(botao);
  });
}

function mostrarResposta(index) {
  // Esconde alternativas
  alternativasContainer.innerHTML = '';

  // Mostra resposta
  resultadoDiv.style.display = 'block';
  textoResultado.textContent = perguntas[perguntaAtual].resposta[index];

  // Atualiza para próxima pergunta após um tempo ou clique
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    setTimeout(() => {
      carregarPergunta();
    }, 2000); // espera 2 segundos antes de passar
  } else {
    // Se acabar as perguntas, pode exibir uma mensagem final ou reiniciar
    setTimeout(() => {
      mostrarFinal();
    }, 2000);
  }
}

function mostrarFinal() {
  perguntaElemento.textContent = 'Fim das perguntas! Obrigado por participar.';
  alternativasContainer.innerHTML = '';
  resultadoDiv.style.display = 'none';
}

// Inicia
carregarPergunta();
