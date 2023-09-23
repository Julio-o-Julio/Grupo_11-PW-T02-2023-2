const phrase = {
  ranking: [
    "O jogo vicia, não é mesmo? Quem não quer ser o primeiro? Quem não quer estar no topo?",
    "Eu já tenho o meu veredito... FAKE NATTY!!",
    "Não tem como chegar neste ranking sem o suco!",
    "Está quase lá meu jovem!",
    "Será que você está usando o suco?",
    "Está indo bem, mas tem gente melhor...",
    "O seu ranking está subindo não é mesmo?",
    "Você é natural ou tem algum segredinho sujo?",
    "Muitos irão te prometer o mundo, mas a verdade fere. Continue natural garoto(a)!",
    "Sim, você é natural",
    "Eu já tenho o meu veredito... natural!",
    "Você é natural com certeza",
    "Continue assim, sem usar do suco",
    "O que está acontecendo meu jovem? Jesus Christ!!",
    "Isso não é nada aesthetic...",
    "Não desista dos seus sonhos, jovem!"
  ],
  score: [
  "Eu já tenho o meu veredito... FAKE NATTY!!",
  "Qual é o seu segredo? Como sua nota se tornou tão AESTHETIC?",
  "Isso me cheira a suco! Como pode tirar uma nota tão AESTHETIC?",
  "Você é natural ou tem algum segredinho sujo?",
  "O seu ranking está subindo não é mesmo?",
  "Muitos irão te prometer o mundo, mas a verdade fere. Continue natural garoto(a)!",
  "Será que você está usando o suco?",
  "Sim, você é natural",
  "Eu já tenho o meu veredito... natural!",
  "Você é natural com certeza",
  "Continue assim, sem usar do suco",
  "O que está acontecendo meu jovem? Jesus Christ!!",
  "Pelo menos uma né meu jovem",
  "Isso não é nada aesthetic...",
  "Não desista dos seus sonhos, jovem!"
]}

function returnPhrase(vetorName, inicio, fim) {
  if (vetorName == 'ranking') {
    return phrase.ranking[Math.floor(Math.random() * (fim - inicio) + inicio)]
  } else {
    return phrase.score[Math.floor(Math.random() * (fim - inicio) + inicio)]
  }
}

const MotivationalPhrase = ({ ranking, score }) => {

  if (ranking) {
    switch (ranking) {
      case 1:
        return <b>{returnPhrase('ranking', 0, 3)}</b>;
      case 2:
        return <b>{returnPhrase('ranking', 3, 6)}</b>;
      case 3:
        return <b>{returnPhrase('ranking', 6, 9)}</b>;    
      default:
        return <b>{returnPhrase('ranking', 9, 16)}</b>;
    }
  } else if (score) {
    switch (score) {
      case 10:
        return <b>{returnPhrase('score', 0, 3)}</b>;
      case 9:
        return <b>{returnPhrase('score', 3, 9)}</b>;
      case 8:
        return <b>{returnPhrase('score', 3, 9)}</b>;
      case 7:
        return <b>{returnPhrase('score', 3, 9)}</b>;
      default:
        return <b>{returnPhrase('score', 9, 15)}</b>;
    }
  } else {
    return null;
  }
};

export default MotivationalPhrase;

/* 
Boas ranking:
1
Eu já tenho o meu veredito... FAKE NATTY!!
Não tem como chegar neste ranking sem o suco!
O jogo vicia, não é mesmo? Quem não quer ser o primeiro? Quem não quer estar no topo?
2
Está quase lá meu jovem!
Será que você está usando o suco?
Está indo bem, mas tem gente melhor...
3
O seu ranking está subindo não é mesmo?
Você é natural ou tem algum segredinho sujo?
Muitos irão te prometer o mundo, mas a verdade fere. Continue natural garoto(a)!

Más ranking:
, 'Sim, você é natural'
, 'Eu já tenho o meu veredito... natural!'
, 'Você é natural com certeza'
, 'Continue assim, sem usar do suco'
, 'O que está acontecendo meu jovem? Jesus Christ!!'
, 'Pelo menos uma né meu jovem'
, 'Isso não é nada aesthetic...'
, 'Não desista dos seus sonhos, jovem!'

Boas fim de game:
10
'Eu já tenho o meu veredito... FAKE NATTY!!'
, 'Qual é o seu segredo? Como sua nota se tornou tão AESTHETIC?'
, 'Isso me cheira a suco! Como pode tirar uma nota tão AESTHETIC?'
9
, 'Você é natural ou tem algum segredinho sujo?'
, 'O seu ranking está subindo não é mesmo?'
7 - 8
, 'Muitos irão te prometer o mundo, mas a verdade fere. Continue natural garoto(a)!'
, 'Será que você está usando o suco?'
6
, 'Sim, você é natural'
, 'Eu já tenho o meu veredito... natural!'
, 'Você é natural com certeza'
, 'Continue assim, sem usar do suco'
, 'O que está acontecendo meu jovem? Jesus Christ!!'
, 'Pelo menos uma né meu jovem'
, 'Isso não é nada aesthetic...'
, 'Não desista dos seus sonhos, jovem!'

*/
