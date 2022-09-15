import { DateTime } from 'luxon';
import decode from 'jwt-decode';
import { AUTH_STORAGE_NAME } from '../constants/_environment';
const TOKEN_KEY = AUTH_STORAGE_NAME || 'token';
const APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];
export const signOut = () => {
    return localStorage.clear();
};
export const getStoreData = ($key) => {
    const dataStore = localStorage?.getItem($key);
    return dataStore ? JSON.parse(dataStore) : null;
};
export const setStoreData = ($key, $value) => {
    localStorage.setItem($key, typeof $value === 'object' ? JSON.stringify($value) : $value);
};
export const removeStore = ($key) => {
    localStorage.removeItem($key);
};
export const getTokenExpirationDate = (encodedToken) => {
    if (!encodedToken) {
        return new Date(0); // is expired
    }
    const token = decode(encodedToken);
    if (!token.exp) {
        return new Date(0); // is expired
    }
    const expirationDate = new Date(token.exp * 1000);
    return expirationDate;
};
export const isExpiredToken = (encodedToken) => {
    const expirationDate = getTokenExpirationDate(encodedToken);
    const rightNow = DateTime.local();
    const isExpiredToken = rightNow > DateTime.fromJSDate(expirationDate);
    return isExpiredToken;
};
export const getToken = (fromStorage = APP_PERSIST_STORES_TYPES[0], tokenKey = TOKEN_KEY) => {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
        return (localStorage && localStorage.getItem(tokenKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
        return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
    }
    // default:
    return null;
};
