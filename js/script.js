const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let data = {
    nome,
    email
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem("lead", convertData)

  let content = document.getElementById("content")

  content.innerHTML = "<p>Carregando</p>"
})