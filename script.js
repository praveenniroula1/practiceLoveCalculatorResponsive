const button = document.getElementById("button");

button.addEventListener("click", () => {
  const data = Math.random() * 100;
  const realData = Math.floor(data);
  const percent = realData;

  if (!yourNameValue && !partnerNameValue) {
    return alert("fill the form first");
  }

  if (percent >= 50) {
    display.innerHTML =
      "Congratulation!!!" +
      " " +
      yourNameValue +
      " " +
      "and" +
      " " +
      partnerNameValue +
      " " +
      "have compatibility of" +
      " " +
      percent +
      "%.";
  } else {
    display.innerHTML =
      "Ooopsss!!!" +
      " " +
      yourNameValue +
      " " +
      "and" +
      " " +
      partnerNameValue +
      " " +
      "have compatibility of only" +
      " " +
      percent +
      "%.";
  }
  yourName.value = "";
  partnerName.value = "";
  yourNameValue = "";
  partnerNameValue = "";
});

const display = document.getElementById("display");

const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");
let yourNameValue = "";
let partnerNameValue = "";

const nameDisplay = () => {
  yourName.addEventListener("change", () => {
    yourNameValue = yourName.value;
  });
  partnerName.addEventListener("change", () => {
    partnerNameValue = partnerName.value;
  });
};
nameDisplay();
