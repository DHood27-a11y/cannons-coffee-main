let contactForm = document.querySelector("#contactForm");
let formContainer = document.getElementById("contactForm");
// console.log(form);

contactForm.addEventListener("submit", onContactSubmit);

function onContactSubmit() {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log("Contact form data:", dataObject);
  contactForm.reset();

  let name = dataObject.contactName;
  let email = dataObject.contactEmail;
  let phone = dataObject.contactPhone;
  let comments = dataObject.comments;
  let flavor = dataObject.flavor;
  let interest = dataObject.interest;

  let message = `Thanks ${name}! We've received your info. We'll reach back at ${email} or ${phone} if we have questions. You mentioned: ${comments}. Your favorite coffee flavor is ${flavor}, and you're interested in ${interest}.`;

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  formContainer.appendChild(messageParagraph);
}
