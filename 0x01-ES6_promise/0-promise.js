export default function getResponseFromAPI () {
  const num = Math.random() * 10;
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve('promise is kept');
    } else {
      reject(new Error('I cannot'));
    }
  });
}
