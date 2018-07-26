// Single responsibility principle.
// Each page of javascript should only have one responsibility.
// One responsibility per page prevents merge conflicts/allows multiple people to work on javascript.
// The responsibility is defined by the task required of the page.

// Things you should know well by now 
//     Proper variable naming
//     Data structures
//     objects, keys, values,
//     functions and their purpose
//     function arguments and how to use them
//     events listeners - responding to user interaction in the browser


// Function to create objects
// Reduces human error from manually creating an entire database of objects
const createSnackCake = (title, description, amount, price, topping, weight) => {
    //object variable
    const snackCake = {
        // Key attachs to object variable snackcake while value attaches to function arguments
        // Key: value,
        title: title,
        description: description,
        amount: amount,
        price: price,
        topping: topping,
        weight: weight
    }
    return snackCake
}; 