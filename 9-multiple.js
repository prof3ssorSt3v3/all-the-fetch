//handle multiple requests for data
// in sequence .then().then().then()
// or at the same time - Promise.all() .race() .allSettled()

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';

export function getData() {
  //
  let imgResponse;
  let jsonResponse;
  //sequence
  fetch(imgstr)
    .then((response) => {
      if (!response.ok) throw new Error('invalid');
      return response.blob();
      //we can add another then and work with image here
    })
    .then((blob) => {
      //work with blob add img to page...
      return fetch(jsonstr);
    })
    .then((response) => {
      if (!response.ok) throw new Error('invalid');
      jsonResponse = response.json();
      return Promise.all([imgResponse, jsonResponse]);
    })
    .then(([blob, dataObj]) => {
      console.log(dataObj);
      console.log(blob);
    })
    .catch(console.warn);

  Promise.all([fetch(imgstr), fetch(jsonstr)])
    .then(([imgRes, jsonRes]) => {
      return Promise.all([imgRes.blob(), jsonRes.json()]);
    })
    .then(([blob, jsonData]) => {
      //at the same time
    })
    .catch(console.warn);
}
