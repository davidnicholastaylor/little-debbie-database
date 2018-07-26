// Single responsibility principle.
// Each page of javascript should only have one responsibility.
// One responsibility per page prevents merge conflicts/allows multiple people to work on javascript.
// The responsibility is defined by the task required of the page.

// Create function to populate database on command through event listener
// Function prevents database from automatically loading
function populateDB() {
const cosmicBrownies = createSnackCake("a", "b", "c", "d", "e", "f");

const donutSticks = createSnackCake("Little Debbie Donut Sticks", "Delicious donut sticks perfect for dunking", 12, 10.99, "Sweet glaze coating", 10)

const littleDebbie = [donutSticks, cosmicBrownies]

    const stringifiedDebbieData = JSON.stringify(littleDebbie)
    localStorage.setItem("littleDebbie" , stringifiedDebbieData)
}