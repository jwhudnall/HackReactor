// setTimeout()

// setTimeout(() => {
//     console.log('Hello!');
// },3000);

// console.log('Script started!');

// setTimeout(() => {
//     console.log('Script ended (5 seconds after start)')
// }, 5000);

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// Combining the two
const id1 = setInterval(() => {
    console.log(Math.random());
}, 1000); // logs random num every 1 second

id1;

setTimeout(() => {
    clearInterval(id1);
    console.log('Function stopped!');
}, 10000)