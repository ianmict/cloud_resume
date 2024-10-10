async function getVisitorCount() {
    const response = await fetch('https://your-api-endpoint/visitors');
    const count = await response.json();
    document.getElementById('visitor-count').innerText = count;
  }

  getVisitorCount();