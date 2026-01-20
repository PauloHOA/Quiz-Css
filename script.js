function verificarResultado() {
  let pontos = 0;

  if (document.getElementById("p1certo").checked) pontos++;
  if (document.getElementById("p2certo").checked) pontos++;
  if (document.getElementById("p3certo").checked) pontos++;

  alert("Você acertou " + pontos + " de 3 perguntas!");
}
