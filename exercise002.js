import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

fetchData(jsonTypicode);

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch(error) {
    console.log(error);
  }
}