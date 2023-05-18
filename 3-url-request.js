// URL and Request Objects
/*
 url: href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams
request options: method, body, headers, cache
cache  (HTTP Cache, NOT Cache API)
- `default`: cache first, server request if stale, update cache if newer
- `reload`: always go to server AND update the cache
- `no-store`: always go to server but do not update the cache
- `no-cache`: make a conditional request to server and compare, update cache and use latest
- `force-cache`: only makes request if there is no HTTP Cache file
- `only-if-cache`: from cache or 504 gateway timeout error
Headers
- string | object literal | new Headers()
*/

const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';

export function getData() {
  //
  const url = new URL(str);
  // console.log(url.host, url.origin, url.protocol, url.port, url.pathname);
  const request = new Request(url, {
    headers: { 'x-steve': 'hello' },
    method: 'GET',
    cache: 'no-store',
  });

  fetch(request)
    .then((response) => {
      // console.log(response.status);
      if (!response.ok) throw new Error('Invalid');
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.warn(err.message));
}
