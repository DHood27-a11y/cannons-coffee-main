/* JavaScript coming soon! */
let form = document.querySelector("#form");
let container = document.getElementById("form");
console.log(form);
form.addEventListener("submit", onSubmit);

function onSubmit() {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  form.reset();

  let name = dataObject.fullName;
  let email = dataObject.Email;
  let password = dataObject.pw;

  let message = `Welcome, ${name}! You are logged in!`;
  console.log("Message", message);

  let messageParagraph = document.createElement("p");

  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
