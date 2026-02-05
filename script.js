let coins = 0;

function watchAd() {
  alert("Ad dekh rahe ho... 10 sec wait karo");

  setTimeout(() => {
    coins += 5;
    document.getElementById("coins").innerText = coins;
    alert("🎉 You earned 5 coins!");
  }, 10000);
}
