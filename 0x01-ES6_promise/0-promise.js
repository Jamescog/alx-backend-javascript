function getResponseFromAPI(response, resolve) {
  return new Promise((resolve, reject) => {
    const concept = "Promise"
    resolve(response);
    console.log(concept)
    reject(error);
    console.log("Promise is not kept")
  });
}
