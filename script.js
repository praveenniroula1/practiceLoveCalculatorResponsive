const button = document.getElementById("button");
let percent = "";
button.addEventListener("click", () => {
  const data = Math.random() * 100;
  const realData = Math.floor(data);
  const percent = realData;
  if (percent >= 50) {
    display.innerHTML = "Congratulation" + " " + percent + "%.";
  } else {
    display.innerHTML = "Oopsss" + " " + percent + "%" + "only.";
  }
});

const display = document.getElementById("display");
