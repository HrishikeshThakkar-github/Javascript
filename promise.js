/* 

Why Callbacks Are Important in JavaScript?
JavaScript is single-threaded and synchronous, meaning it executes one statement at a time. However, sometimes we need to wait for things like fetching data from a server, setting a timeout, or handling user input.

Callbacks allow us to handle these asynchronous operations. For example:

javascript
Copy
Edit
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);
Here, the setTimeout function takes a callback function and executes it after 3 seconds. This allows JavaScript to continue executing other code while waiting.

Problems with Callbacks
While callbacks help us handle asynchronous code, they introduce two major problems:

1. Callback Hell (Pyramid of Doom)
When multiple async operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.

Example:

javascript
Copy
Edit
createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function(summary) {
            updateWallet(summary, function() {
                console.log("Wallet updated!");
            });
        });
    });
});
This "nested" structure is called Callback Hell or Pyramid of Doom, making debugging difficult.

2. Inversion of Control
When we pass a callback to a function (e.g., createOrder(cart, callback)), we lose control over when and how it will be executed.
We are blindly trusting another function (which could be written by someone else, or even buggy) to call our callback correctly.

Example Proble
What if createOrder never calls the callback or calls it twice?

javascript
Copy
Edit
function createOrder(cart, callback) {
    if (Math.random() > 0.5) {
        callback("Order Created");  // Called once
    }
    callback("Order Created Again?");  // Oh no! Called twice!
}

createOrder(["shoes"], function(message) {
    console.log(message); // This could run once or twice unpredictably
});
This unpredictability makes debugging painful.

Solutions to Callback Problems
To solve these issues, JavaScript introduced Promises and later async/await, which provide a cleaner and more readable way to handle asynchronous operations.

Example using Promises:

javascript
Copy
Edit
createOrder(cart)
    .then(proceedToPayment)
    .then(showOrderSummary)
    .then(updateWallet)
    .catch(error => console.log("Error:", error));
This avoids deep nesting and gives better control over our asynchronous flow.

Final Summary
Callbacks help us handle asynchronous operations in JavaScript.
Callback Hell (Pyramid of Doom) occurs when we have multiple nested callbacks.
Inversion of Control means we lose control over when our callback is executed.
Promises & async/await help fix these issues, making asynchronous code cleaner and more readable.
*/


const cart=["shoes","pants","kurta"]

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

const promise = createOrder(cart);
// this will store the cart in an object format

//{data: orderDetails }

promise.then(function(orderId){
    proceedTopayment(orderId);
})

//promise gives us the gurantee that once the promise has the cart then it will call the payment function

 