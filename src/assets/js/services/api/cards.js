import { fetchJSON } from './utils';

export const get = async function(url, params) {
  return await fetchJSON(url, {});
}