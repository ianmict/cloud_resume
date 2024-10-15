const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://9hn8n5ie91.execute-api.us-east-1.amazonaws.com/Deploy/visitors");
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
