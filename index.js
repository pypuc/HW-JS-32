function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
const promises = [
  delayedPromise('Проміс 1', 1000),
  delayedPromise('Проміс 2', 500),
  delayedPromise('Проміс 3', 1500),
  delayedPromise('Проміс 4', 800),
  delayedPromise('Проміс 5', 1200)
];
Promise.all(promises)
  .then((results) => {
    console.log('Усі проміси вирішено:');
    results.forEach((result, index) => {
      console.log(`Результат ${index + 1}: ${result}`);
    });
  })
  .catch((error) => {
    console.error('Помилка під час виконання промісів:', error);
  });

  // 2
function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
const promisese = [
  randomDelay('проміс A'),
  randomDelay('проміс B'),
  randomDelay('проміс C'),
  randomDelay('проміс D'),
  randomDelay('проміс E')
];
Promise.race(promises)
  .then((result) => {
    console.log('Найшвидший проміс:', result);
  })
  .catch((error) => {
    console.error('Помилка:', error);
  });


