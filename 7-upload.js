//how to upload one or more files from the browser to a server
//FormData objects
//HTTP Methods POST, PATCH, PUT

let endpoint = 'http://127.0.0.1:3000/';

export function setData() {
  //
  const imgInput = document.getElementById('imgfile');
  const jsonInput = document.getElementById('jsonfile');

  document.getElementById('myform').addEventListener('submit', (ev) => {
    ev.preventDefault();
    //upload something
    let obj = {
      id: 123,
      name: 'steve',
    };
    let jsonstring = JSON.stringify(obj);

    let fd = new FormData(document.getElementById('myform'));
    // console.log(imgInput.files[0]);
    // fd.append('imageFile', imgInput.files[0], imgInput.files[0].name);

    let request = new Request(endpoint, {
      method: 'POST',
      // body: jsonstring,
      body: fd,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    fetch(request)
      .then((response) => {
        if (!response.ok) throw new Error('invalid');
        return response.text();
      })
      .then((txt) => {
        console.log(txt);
      })
      .catch(console.warn);
  });
}
