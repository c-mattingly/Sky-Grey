import tokenService from "./tokenService";

const BASE_URL = '/api/cities/';

export function create(zip) {
    return fetch(BASE_URL + zip, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
		if(res.ok) return res.json()
	  new Error('Error adding City');
	})
}

export function removeCity(zip){
	return fetch(`${BASE_URL}${zip}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error removing City');
	})
}

export function getCity(zip){
    return fetch(BASE_URL + zip, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials')
    })
  }