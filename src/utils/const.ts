export const BASE_URL = "http://localhost:1337/api";

/**
 *  Prefixes the url with the base url
 * @param url {string} : url to be prefixed
 * @returns  {string} : prefixed url
 */
export const apiPrefix = (url: string): string => BASE_URL + url;

export const TOKEN = "token";
