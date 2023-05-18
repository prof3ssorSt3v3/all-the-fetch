//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
  //
  fetch(url)
    .then((resp) => {
      // console.log(resp);
      //error checking
      //200-299
      if (!resp.ok) throw new Error('was not a valid response');
      return resp.json(); //method to extract JSON string and convert it to an Object
    })
    .then((dataobj) => {
      console.log(dataobj);
    })
    .catch((err) => {
      console.warn(err.message);
    });

  //The code below will always fail.
  // let response = fetch(url);
  // let dataobj = response.json();
  // console.log(dataobj);
}

function fred(resp) {}
