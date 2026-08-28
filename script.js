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

// Função que cria uma história com personagens e anos
function gerarHistoria() {
  const resposta1 = respostasUsuario[0];
  const resposta2 = respostasUsuario[1];
  const resposta3 = respostasUsuario[2];

  // Personagem e cenário inicial
  let personagem = resposta1 === 0 ? 'Lucas, um jovem curioso' : 'Maria, uma inovadora sonhadora';
  let anoAtual = 2023;
  let historia = '';

  // Início da história
  historia += `${personagem} vivia em um mundo onde a tecnologia evoluía rapidamente. Em ${anoAtual}, ele/ela começou a explorar uma nova IA revolucionária. `;

  // Decide o próximo passo no tempo
  if (resposta2 === 0) {
    historia += `Em ${anoAtual + 5}, ${personagem.split(',')[0]} acreditava que limites éticos eram essenciais para garantir um futuro seguro. `;
  } else {
    historia += `Em ${anoAtual + 5}, ${personagem.split(',')[0]} pensava que a liberdade da IA traria avanços sem limites, mesmo com riscos. `;
  }

  // Uso na rotina
  if (resposta3 === 0) {
    historia += `No ano de ${anoAtual + 10}, eles/elas usaram a IA para transformar suas vidas diárias, tornando tudo mais prático e eficiente. `;
  } else {
    historia += `No ano de ${anoAtual + 10}, preferiram continuar a fazer as coisas manualmente, valorizando o desafio e a autonomia. `;
  }

  // Conclusão
  historia += `Assim, ao longo dos anos, ${personagem} enfrentou escolhas que moldaram seu futuro e o mundo ao seu redor.`;

  // Exibir história final
  perguntaElemento.textContent = 'Sua história de vida com a IA:';
  textoResultado.textContent = historia;
  alternativasContainer.innerHTML = '';
  resultadoDiv.style.display = 'block';
}

// Inicia o quiz
carregarPergunta();
