function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(applicantForm);
  const name = formData.get("name");
  const telefon = formData.get("tel");
  if ((name && telefon) != "") {
    alert("Отправлено.");
  }
//   console.log(name, telefon);
}

const applicantForm = document.getElementById("send");
applicantForm.addEventListener("submit", handleFormSubmit);
