// Criar uma página com 2 input's sendo eles: nome e idade.
// Quando clicar no botão criar, deverá ser criado um objeto e salvo no localStorage. Ao clicar no botão apresentar, deverá ser recolhido o objeto que está salvo no localStorage e apresentado dentro de uma div.

function criar() {
  // input é .value
  // aguenta até 5mb
  // banco de dados, transição de dados de um local para outro
  // não é para dados sensíveis
  localStorage.setItem("nome", document.getElementById("nome").value);

  localStorage.setItem("idade", document.getElementById("idade").value);
}

function apresentar() {
  // span é innerHtml
  document.getElementById("apresentarNome").innerHTML = localStorage.getItem(
    "nome"
  );

  document.getElementById("apresentarIdade").innerHTML = localStorage.getItem(
    "idade"
  );
}

function deletarNome() {
  localStorage.removeItem("nome");
  localStorage.removeItem("idade");
}

function deletarTudo() {
  localStorage.clear();
}

// modelo

// function gravar() {
//   localStorage.setItem("nome", document.getElementById("nome").value);
// }

// function apresentarNome() {
//   document.getElementById("apresentarNome").innerHTML = localStorage.getItem(
//     "nome"
//   );
//   //   pegando - key value
//   //   perco os dados ao fechar a janela
// }
