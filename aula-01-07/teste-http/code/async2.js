const axiosRequest = require('axios');

let response = axiosRequest.get('https://www.boredapi.com/api/activity/')

console.log(`Você pode fazer essa atividade: ${response.data.activity}`)

