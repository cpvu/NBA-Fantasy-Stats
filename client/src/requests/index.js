const fetch = require('node-fetch');

const getByPosition = async () => {
  const response = await fetch("/api/getByPosition");
  console.log(await response.json());
}

