<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Interação com Botão</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #mensagem {
      margin-top: 10px;
      font-weight: bold;
      color: #2e8b57;
    }
  </style>
</head>
<body>

  <p>Este é um parágrafo de exemplo.</p>

  <button id="botaoMensagem">Clique para ver uma mensagem!</button>

  <div id="mensagem"></div>

  <script>
    const botao = document.getElementById('botaoMensagem');
    const mensagemDiv = document.getElementById('mensagem');

    botao.addEventListener('click', function() {
      mensagemDiv.textContent = "Você é capaz de realizar grandes coisas! 🚀";
    });
  </script>

</body>
</html>
