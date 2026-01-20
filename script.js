function verificarResultado() {
  let pontos = 0;

  if (document.getElementById("p1certo").checked) pontos++;
  if (document.getElementById("p2certo").checked) pontos++;

  alert("Você acertou " + pontos + " de 2 perguntas!");
}
