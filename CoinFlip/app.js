let coin=document.querySelector("#coin");
let flipbtn=document.querySelector("#flipbutton")
const randomNo = () => Math.floor(Math.random() * 2);
let rotation = 0;

function flipCoin() {
    coin.classList.add("flip");

    let no = randomNo();

    setTimeout(() => {
        coin.innerText = no === 0 ? "TAIL" : "HEAD";
    }, 400);

    setTimeout(() => {
        coin.classList.remove("flip");
    }, 800);
}
flipbtn.addEventListener("click", flipCoin);
coin.addEventListener("animationend", () => {
    coin.classList.remove("flip");
});