// Load configuration from config.json
let config = {};

fetch('config.json')
  .then(response => response.json())
  .then(data => {
    config = data;
    initializeApp();
  })
  .catch(error => console.error('Error loading config:', error));

function initializeApp() {
  // This function is called after config is loaded
  // The main.js file will use the config variable
}
