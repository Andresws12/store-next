export const BASE_URL = process.env.VITE_API_URL || '';

/**
 *  Prefixes the url with the base url
 * @param url {string} : url to be prefixed
 * @returns  {string} : prefixed url
 */
export const apiPrefix = (url: string): string => BASE_URL + url;

