const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercent");
const peopleInput = document.getElementById("peopleCount");
const calculateBtn = document.getElementById("calculateBtn");
const tipButtons = document.querySelectorAll(".tip-btn");

const tipAmountEl = document.getElementById("tipAmount");
const totalAmountEl = document.getElementById("totalAmount");
const perPersonEl = document.getElementById("perPerson");

let selectedTipPercent = null;


tipButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedTipPercent = parseFloat(button.dataset.percent);
    tipInput.value = "";
    tipButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

tipInput.addEventListener("input", () => {
  selectedTipPercent = null;
  tipButtons.forEach(btn => btn.classList.remove("active"));
});

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const customTip = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  const tipPercent = selectedTipPercent !== null ? selectedTipPercent : customTip;

  if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0 || isNaN(people) || people <= 0) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

  tipAmountEl.textContent = `Tip: $${tipAmount.toFixed(2)}`;
  totalAmountEl.textContent = `Total (with Tip): $${total.toFixed(2)}`;
  perPersonEl.textContent = `Each Person Pays: $${perPerson.toFixed(2)}`;
});
