// CORS - cross origin resource sharing
/*
All requests that are not GET or HEAD need to include an `origin` header. 
Set by the browser, not the script.
Server sets ACCESS-Control-Allow-Origin: http://127.0.0.1:5500

Simple Request: The preflight request is NOT needed when:

1. method is HEAD, GET, or POST;
2. and headers are only accept, accept-language, content-language, content-type, or range
3. and content-type is only `text/plain`, `multipart/form-data`, or `application/x-www-form-urlencoded`;
4. and `accept`, `accept-language`, and `content-language` are only standard values;
5. and no ReadableStream object is used in the Request

CORS OPTIONS request includes the 
`Access-Control-Request-Method` and 
`Access-Control-Request-Headers` headers.

Request Mode
- no-cors: skip the OPTIONS request
- cors: must meet the CORS criteria. OPTIONS request will be made
- same-origin: result in an error if not same origin
- navigate: only set by the browser, not by JS


Opaque responses can be used as the contents of a `<script>`, `<link rel="stylesheet">`, `<img>`, `<video>`, `<audio>`, `<iframe>`, `<embed>` or `<object>`.

Not for `<canvas>`.

Not for Web Fonts.

Not for Cache Storage `add()` or `addAll()`. But you can do a fetch and then use Cache `put()`.

Opaque responses have a status of 0.

Using no-cors mode basically means that, if you get an opaque response:

1. you don't care about seeing the resulting file
2. don't bother sending a preflight request.

A CORS-safelisted response-header names

`Cache-Control` `Content-Language` `Content-Length` `Content-Type` `Expires` `Last-Modified` `Pragma`
*/

export function getData() {
  //
  const imgurl = `https://picsum.photos/id/237/300/200`;

  let request = new Request(imgurl, {
    cache: 'default',
    credentials: 'same-origin',
    method: 'GET',
    mode: 'no-cors',
  });

  fetch(imgurl).then((resp) => {
    console.log('External IMG mode: cors');
    console.log(resp.status); // 200
  });
  fetch(imgurl, { mode: 'no-cors' }).then((resp) => {
    console.log('External IMG mode: no-cors');
    console.log(resp.status); // 0
  });

  const jsonurl = `http://127.0.0.1:5500/local-sample.json`;
  fetch(jsonurl, { mode: 'cors' }).then((resp) => {
    console.log('Local JSON mode: cors');
    console.log(resp.status); // 200
  });
  fetch(jsonurl, { mode: 'no-cors' }).then((resp) => {
    console.log('Local JSON mode: no-cors');
    console.log(resp.status); // 0
  });
}
