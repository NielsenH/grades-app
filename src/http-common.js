import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'http://gentle-cove-53100.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
