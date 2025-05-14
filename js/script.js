const button = document.querySelector("button");
const coin = document.querySelectorAll(".coin");
const p = document.querySelector("p");
const coinContainer = document.querySelector(".coin-container");
let arr = ["heads", "tails"];
button.addEventListener("click", start);
coinContainer.addEventListener("click", start);

function start() {
  coinContainer.classList.remove("animate");
  void coinContainer.offsetWidth; //To ensure that animation reset
  coinContainer.classList.add("animate");
  let res = arr[Math.round(Math.random())];
  setTimeout(() => {
    coin[0].src = `images/${res}.svg`;
    coin[1].src = `images/${res === "tails" ? "heads" : "tails"}.svg`;
    p.textContent = res;
  }, 1500);
}
