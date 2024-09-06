const URL = "https://v6.exchangerate-api.com/v6/f389ec324c9ffe539c7fa7c3/latest/";

const dropdown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".form select");
const fromCurr = document.querySelector(".Container select[name='from']");
// const toCurr = document.querySelector(".to select");
const toCurr = document.querySelector(".Container select[name='to']");

for (let select of dropdown) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "PKR") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "USD") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let antVal = amount.value;
  if (antVal === "" || antVal < 1) {
    antVal = 1;
    amount.value = "1";
  }
  // console.log(fromCurr.value ,toCurr.value)
 
  const url =`${URL}/${fromCurr.value.toUpperCase()}/${toCurr.value.toUpperCase()}.json`;

  
  let response = await fetch(url);
console.log(response);
}); 
