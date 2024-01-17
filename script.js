const dateInput = document.getElementById("dateInput");
const pElement = document.querySelector("p");
const myImage = document.querySelector("img");

dateInput.addEventListener("change", () => {
  const inputValue = dateInput.value;

  const birthDate = new Date(inputValue);

  // Verificar si es una fecha válida
  if (!isNaN(birthDate)) {
    const currentDate = new Date();
    const newDate = new Date(currentDate - birthDate);

    const years = newDate.getUTCFullYear() - 1970;
    const months = newDate.getUTCMonth();
    const days = newDate.getUTCDate() - 1;

    pElement.innerText = `You're ${years} years, ${months} months, ${days} days old!`;

    if (years >= 6) {
      myImage.src = "img/toradora.gif";
      myImage.alt = "Image activated";
    } else {
      myImage.src = "img/question.png";
      myImage.alt = "Original image";
    }

    // Verificar si es el cumpleaños
    const isBirthday =
      birthDate.getUTCDate() === currentDate.getUTCDate() &&
      birthDate.getUTCMonth() === currentDate.getUTCMonth();

    if (isBirthday) {
      myImage.src = "img/happybday.gif";
    }
  } else {
    alert("Por favor, ingresa una fecha válida.");
    dateInput.value = ""; // Limpiar el campo si la fecha no es válida
  }
});
