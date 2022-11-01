const adviceNumber = document.querySelector(".advice_number");
const advicePhrase = document.querySelector(".advice_phrase");
const button = document.querySelector(".advice_btn");

function newAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      adviceNumber.textContent = `Advice #${value.slip.id}`;
      advicePhrase.textContent = value.slip.advice;
    })
    .catch((err) => console.log(err));
}
button.addEventListener("click", newAdvice);

newAdvice();
