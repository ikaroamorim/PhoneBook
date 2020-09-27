const axios = require('axios');

const getEntries = ()=>{
    axios.get('http://localhost:3000/phones')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((error) => {
            console.error(error);
            return error;
        });
}

export default getEntries