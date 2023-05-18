// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/usersdfdfgdf';

export async function getData() {
  //
  //fetch().then().then().catch()

  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error('not a valid response');
    let dataobj = await response.json();
    console.log(dataobj);
  } catch (err) {
    console.warn(err.message);
  }
}
