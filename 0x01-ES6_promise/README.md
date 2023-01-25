# JavaScript Promise

Promises in JavaScript provide a way to handle asynchronous operations. They allow you to write code that behaves in a synchronous manner while still being non-blocking and performant.

## A Promise is in one of three states:

- pending: The initial state; the promise is neither fulfilled nor rejected.
- fulfilled: The promise has been fulfilled and the value is available.
- rejected: The promise has been rejected and the reason for rejection is available.

#### Promises are created using the Promise constructor, which takes a single argument: a function called the executor. The executor function takes two arguments: a resolve function and a reject function.
