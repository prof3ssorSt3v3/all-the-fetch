// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {
  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers

  let str = 'http://127.0.0.1:3000/?name=value&steve=griffith';
  let url = new URL(str); //url.search
  let sp = url.searchParams;
  sp.append('hello', 'world');
  sp.append('api-key', 'kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh');
  // document.cookie('')

  let h = new Headers();
  // h.append('content-type', 'application/json')
  // h.append('origin', 'https://cia.org')
  h.append('x-api-key', 'kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh'); //API key
  h.append('Authorization', 'Bearer kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh'); //JWT
  //Forbidden Header Names

  let request = new Request(url, {
    method: 'GET',
    headers: h,
    cache: 'default',
    credentials: 'same-origin',
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
}
