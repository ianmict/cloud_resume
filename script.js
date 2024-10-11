const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://5luuamwfd6uoyxhoyj2yuyi2yi0ogxrg.lambda-url.us-east-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;
}

updateCounter();