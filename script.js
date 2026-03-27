const botao = document.getElementById("toggleTema");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // troca o ícone
  if (document.body.classList.contains("dark")) {
    botao.textContent = "☀️";
  } else {
    botao.textContent = "🌙";
  }
});