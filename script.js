const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let totalPrice = 0;

  prices.forEach(price => {
    totalPrice += parseInt(price.innerText);
  });

  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.innerText = "Total Price:";
  const priceCell = document.createElement("td");
  priceCell.innerText = totalPrice;
  newRow.appendChild(totalCell);
  newRow.appendChild(priceCell);
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
