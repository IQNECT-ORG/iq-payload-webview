import qs from 'qs';
import _ from 'lodash';

export function normalizeParams(params) {
  if(_.isString(params)) {
    return '?' + params;
  } else if(_.isObject(params)) {
    return '?' + qs.stringify(params, { arrayFormat: 'brackets' });
  } else {
    return '';
  }
};

export function buildURL(url, params) {
  return url + normalizeParams(params);
}

export async function fetcher(url, options) {
  let response = await fetch(buildURL(url, options.params), options);
  return {
    json: await response.json(),
    response
  };
};

// JSON

export const serializeJSONBody = function(body) {
  if(_.isString(body)) {
    return body;
  } else {
    return JSON.stringify(body);
  }
}

export const fetchJSON = async function(url, overrideOptions) {
  const options = _.defaultsDeep({
    body: serializeJSONBody(overrideOptions.body)
  }, overrideOptions, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return fetcher(url, options);
};