// script.js

// Initialize the visitor count from local storage or start at 0
let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;

// Function to update the visitor count on the page
function updateVisitorCount() {
    // Increase visitor count by 1
    visitorCount += 1;
    
    // Store the updated count in local storage
    localStorage.setItem('visitorCount', visitorCount);
    
    // Display the updated count in the span with id 'count'
    document.getElementById('count').innerText = visitorCount;
}

// Call the function to update the visitor count when the page loads
window.onload = updateVisitorCount;
