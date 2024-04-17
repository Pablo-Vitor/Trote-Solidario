
function calculadora(){
  // Obtendo os valores dos campos
  var cestas = Number(document.getElementById("cesta").value) ;
  var suplemento = Number(document.getElementById("suplemento").value) ;
  var arroz5 = Number(document.getElementById("arroz5").value) ;
  var arroz1 = Number(document.getElementById("arroz1").value) ;
  var feijao2 = Number(document.getElementById("feijao2").value) ;
  var feijao1 = Number(document.getElementById("feijao1").value) ;
  var macarrao = Number(document.getElementById("macarrao").value) ;
  var oleo = Number(document.getElementById("oleo").value) ;
  var leite = Number(document.getElementById("leite").value) ;
  var sangue = Number(document.getElementById("sangue").value) ;
  var criatividade = Number(document.getElementById("criatividade").value) ;
  var performace = Number(document.getElementById("performace").value) ;
  var contextualizacao = Number(document.getElementById("contextualização").value) ;
  var originalidade = Number( document.getElementById("originalidade").value) ;
  var caracterizacao = Number(document.getElementById("caracterizacao").value) ;
  var atuacao = Number(document.getElementById("atuacao").value) ;
  var social = Number(document.getElementById("social").value) ;
  var quiz = Number(document.getElementById("quiz").value) ;
  var extra = Number(document.getElementById("extra").value) ;
  var equipe = Number(document.getElementById("equipe").value) ;

  var cor = document.getElementById("cor").value;

  // Variável para armazenar a pontuação da equipe
  var pontos_equipe = 0;

  // Utilizando switch para determinar a pontuação com base na equipe selecionada
  switch (cor) {
      case '0':
          pontos_equipe = 0; // Pontuação para a equipe Amarela
          break;
      case '1':
          pontos_equipe = 500; // Pontuação para a equipe Laranja
          break;
      case '2':
          pontos_equipe = 1000; // Pontuação para a equipe Roxa
          break;
      case '3':
          pontos_equipe = 1500; // Pontuação para a equipe Verde
          break;
      case '4':
          pontos_equipe = 2000; // Pontuação para a equipe Vermelha
          break;
      default:
          pontos_equipe = 0; // Pontuação padrão (caso o valor não corresponda a nenhuma equipe)
  }

  // Calculando pontuações

  var pontos_leite = leite * 2;
  var pontos_sangue = sangue * 20;
  var pontos_acao_social = social * 1000;
  var pontos_apresentacao_musical = criatividade + performace + contextualizacao ;
  var pontos_mascote = originalidade + caracterizacao + atuacao;
  var pontos_quiz = quiz * 1000;
  var cestas = cestas * 30
  var suplemento = suplemento * 15
  var arroz5 = arroz5 * 5
  var feijao2 = feijao2 * 2
  var equipe_pont = equipe * 1000   




  // Somando os pontos totais
  var pontos_totais = cestas + suplemento + (arroz5 * 5) + (arroz1 * 1) + (feijao2 * 2) + (feijao1 * 1) + (macarrao * 0.5) + (oleo * 0.9) + pontos_leite + pontos_sangue + pontos_acao_social + pontos_apresentacao_musical + pontos_mascote + pontos_quiz + extra + equipe_pont;

  // Exibindo o resultado
  alert("Pontuação Total: "+ pontos_totais);
}