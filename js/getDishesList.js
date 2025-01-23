export function fetchDishesList() {
  return fetch('https://script.google.com/macros/s/AKfycbzebC0Dsz3W8Gmsq_FDbr0QDcsusV-pGn5PxkL1FtGUGPO7q0aFebuJH1SFYzak9qs2Gw/exec')
    .then(response => {
      if (!response.ok) {
        throw new Error('Сеть ответила с ошибкой: ' + response.status);
      }
      // Преобразуем ответ в JSON
      return response.json();
    })
    .then(data => {
      return processData(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
      return [];
    });
}


function processData(data) {
  const keys = data[0];
  const objectsArray = data.slice(2).map(row => {
    let obj = {};
    row.forEach((value, index) => {
      obj[keys[index]] = value;
    });
    return obj;
  });
  return objectsArray;
}
