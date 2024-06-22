let Alltotal = 0;

function addItem(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".single-item-price").innerText;
  let h2 = mainEl.querySelector(".single-item-heading");
  let totalSpent = document.querySelector(".total-spent");

  price = price.substring(1);
  let total = parseInt(price);

  Alltotal += total;

  mainEl.setAttribute("style", "background-color: rgb(97, 97, 97);");
  h2.setAttribute("style", "color: rgb(102, 17, 17)");
  element.setAttribute("disabled", "true");
  element.setAttribute("style", "background-color: rgb(102, 17, 17)");

  totalSpent.innerHTML = "Total Spent: $" + Alltotal;

  console.log("Clicked");
}
