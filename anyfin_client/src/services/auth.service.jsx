import { config } from '../config';
import { authHeader } from '../helpers';

export const authService = {
    login,
    logout,
    getCountries,
    getCountryByName
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName:email, password })
    };

    return fetch(`${config.apiUrl}users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(data=>{
            return {token : data["token"], user :{ name:data.userName}};
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getCountries() {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}countries`, requestOptions).then(handleResponse);
}

function getCountryByName(name) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}country/serchbyname?name=${name}`, requestOptions).
            then(handleResponse)
            ;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    }).catch(e => Promise.reject(e));
}