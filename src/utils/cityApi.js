// import { post } from "../../routes/api/users";
import tokenService from "./tokenService";

const BASE_URL = '/api/cities';

export function create(userID) {
    return fetch(BASE_URL + userID, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
		if(res.ok) return res.json()
	  new Error('Error adding City');
	})
}

export function removeCity(cityID){
	return fetch(`${BASE_URL}cities/${cityID}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error revmoving City');
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