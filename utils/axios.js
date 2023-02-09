const axios = require('axios');

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();