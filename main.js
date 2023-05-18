/**
Ten Steps to Mastering the Fetch API

1. fetch(string | url | request)
Promises
.then().then().catch()
2. async await + try catch
3. new URL()
url.href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams 
new Request(string | url, options)
Headers - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
4. new Response(string | url | request, File | Blob, options)
HTTP Methods
GET - reading one or more resources (no body)
POST - create new resource (has body)
PUT - replace an existing resource (has body)
PATCH - edit part of an existing resource (has body)
DELETE - delete an existing resource (no body)
OPTIONS - preflight requests for CORS
HEAD - just get the headers for a Response
Body - from inside Response object
Body.text()
Body.json()
Body.blob()
5. generating html from response data array
generating image from response blob
6. API keys - custom header, authorization header, querystring
new Headers()
new URLSearchParams(string | formData | iterable Object)
urlsearchparams.append(name, value)
Authorization header
content-type header
forbidden header names
custom x- headers
Content-Security-Policy connect-src
7. Uploading data
new FormData(FormElement?)  
formdata.append(name, value)
formdata.append(name, blob, filename)
body: Object literal or string or Blob or attachment(s)
header content-disposition: multipart/form-data;boundary--asdf from FormData
8. CORS concepts
simple request
request mode: "cors", - no-cors, *cors, same-origin
request credentials: "same-origin", - include, *same-origin, omit
request cache: "no-cache", - *default, no-cache, reload, force-cache, only-if-cached
access-control-allow-origin
access-control-allow-method
9. Handling multiple fetch calls with Promise.all() .race() .allSettled()
10. Aborting a fetch request with an AbortController
Bonus: Measuring Download progress
**/

// import { getData } from './1-basic-fetch.js';
// import { getData } from './2-try-async.js';
// import { getData } from './3-url-request.js';
// import { getData } from './4-response.js';
// import { getData } from './5-generate.js';
import { getData } from './6-auth.js';
// import { setData } from './7-upload.js';
// import { getData } from './8-cors.js';
// import { getData } from './9-multiple.js';
// import { getData } from './10-abort.js';
// import { getData } from './11-progress.js';

getData();
// setData();
