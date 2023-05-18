// measure the download progress of a file

const imgstr = 'https://picsum.photos/id/237/3000/2000'; //big image

export function getData() {
  //download a big image and measure the progress of the download
  fetch(imgstr).then(async (response) => {
    //create a reader to read the stream of data from the response body
    const reader = response.body.getReader();
    //get the length (size) of the file
    const contentLength = +response.headers.get('content-length');
    //how much data so far
    let receivedLength = 0;
    let chunks = [];
    console.group('progress');
    while (true) {
      const { done, value } = await reader.read();
      if (done) break; //exit if no more data
      chunks.push(value);
      receivedLength += value.length;
      console.log(`Received ${receivedLength} of ${contentLength}`);
    }
    console.groupEnd('progress');
    //combine all the data chunks into single byteArray
    let byteArray = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
      byteArray.set(chunk, position);
      position += chunk.length;
    }
    //if it were a text file we could use
    //let txt = new TextDecoder('utf-8').decode(byteArray);
    //and then JSON.parse if it was a JSON string

    //for an image
    let blob = new Blob([byteArray], { type: 'image/jpg' });
    let url = URL.createObjectURL(blob);
    let img = document.getElementById('pic');
    img.src = url;
    img.alt = imgstr;
  });
}
