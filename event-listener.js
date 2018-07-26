// Single responsibility principle.
// Each page of javascript should only have one responsibility.
// One responsibility per page prevents merge conflicts/allows multiple people to work on javascript.
// The responsibility is defined by the task required of the page.


// Attach populateButton variable to the populateDatabase id of the button in html
const populateButton = document.querySelector("#populateDatabase");

// Create event listener to populate the database by clicking on the button in html
populateButton.addEventListener("click", populateDB)