// Create Webpage content from fetch results

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';
const textstr = 'http://127.0.0.1:3000/';

export function getData() {
  let list = document.getElementById('list'); //the <ul>
  let img = document.getElementById('pic'); //the <img>
  let header = document.querySelector('header');

  fetch(jsonstr)
    .then((response) => {
      if (!response.ok) throw new Error('invalid');
      return response.json();
    })
    .then((dataArray) => {
      //
      list.innerHTML = dataArray
        .map(({ uid, first_name, last_name }) => {
          return `<li class="listitem" data-uid="${uid}">
            <p>${first_name}</p>
            <p>${last_name}</p>
          </li>`;
        })
        .join('');
    })
    .catch(console.warn);

  fetch(textstr)
    .then((response) => {
      if (!response.ok) throw new Error('invalid');
      return response.text();
    })
    .then((txt) => {
      header.innerHTML += `<h2>${txt}</h2>`;
    })
    .catch(console.warn);

  fetch(imgstr)
    .then((resp) => {
      if (!resp.ok) throw new Error('invalid');
      return resp.blob();
    })
    .then((blob) => {
      let url = URL.createObjectURL(blob);
      console.log(url);
      let img = document.getElementById('pic');
      img.src = url;
    })
    .catch(console.warn);
}
