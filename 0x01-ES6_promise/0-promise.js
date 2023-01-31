<<<<<<< HEAD
function getResponseFromAPI(response, resolve) {
  return new Promise((resolve, reject) => {
    const concept = "Promise"
    resolve(response);
    console.log(concept)
    reject(error);
    console.log("Promise is not kept")
  });
}
=======
export default function getResponseFromAPI() {
  return new Promise(() => {});
}
>>>>>>> a38e745d5e29b025b3949178aa9361e3980de26d
