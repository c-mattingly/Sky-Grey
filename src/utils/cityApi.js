import tokenService from "./tokenService";

const BASE_URL = '/api/cities';


function getCity(name){
    return fetch(BASE_URL + name, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials')
    })
  }

  export default {
    getCity,
  };  