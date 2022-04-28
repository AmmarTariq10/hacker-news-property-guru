import { getURL } from "../Constants/apiConstants";
const TAG = 'ApiHelperFunctions___'
export const get = async (endpoint) => {
    const url = getURL(endpoint)
    const configs = getConfigs('GET');
    try {
      const networkResult = await performNetworkRequest(url, configs);
      const result = await handleResponse(networkResult);
      return Promise.resolve(result);
    } catch (e) {
      const message = getMessage(e);
      return Promise.reject(message);
    }
};

export const log = (label, data) => {
    if (__DEV__) {
        console.log(TAG + `__${label}__ :`, data);
    }
};
export const handleResponse = ({ response, jsonResponse }) => {
    return new Promise((resolve, reject) => {
        switch (response.status) {
            case 200:
            case 201: {
                if (jsonResponse?.error || jsonResponse?.errors) {
                    const message = getMessage(jsonResponse);
                    reject(message);
                } else {
                    resolve(jsonResponse);
                }
                break;
            }
            default: {
                const message = getMessage(jsonResponse);
                reject(message);
                break;
            }
        }
    })
};
export const performNetworkRequest = async (url, configs) => {
    log('performNetworkRequest', '_______');
    log('url', url);
    log('configs', configs);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, configs);
            log('response', response);
            const jsonResponse = await response.json();
            log('jsonResponse', jsonResponse);
            return resolve({ response, jsonResponse });
        } catch (e) {
            log('error', e.stack);
            return reject(e);
        }
    })
};

export const getConfigs = (method, body, formData = false) => {
    var headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    };
    // if (formData == true) {
    //     headers['Content-Type'] = 'multipart/form-data';
    // }
    // const token = getAccessToken();
    // if (token != false) {
    //     headers.Authorization = `Bearer ${token}`;
    // }
    var configs = {
        method: method,
        headers: headers,
    };
    if (body && Object.keys(body).length > 0) {
        if (method == 'POST' || method == 'PUT') {
            if (formData == true) {
                configs.body = jsonToFormdata(body);
            } else {
                configs.body = JSON.stringify(body);
            }
        }
    }
    return configs;
};
export const dataToQueryParameter = data => {
    if (typeof data === 'object') {
        if (!Array.isArray(data)) {
            var params = '?';
            const dataArray = Object.entries(data);
            if (dataArray.length > 0) {
                dataArray.forEach((entry, index) => {
                    var amp = index < dataArray.length - 1 ? '&' : '';
                    params = `${params}${entry[0]}=${entry[1]}${amp}`;
                });
                return params;
            }
        }
    } else if (typeof data === 'string') {
        return data;
    }
    return '';
};
export const getMessage = json => {
    switch (typeof json) {
        case 'string': {
            return json;
        }
        case 'object': {
            if (Array.isArray(json)) {
                var data = json[0];
                return getMessage(data);
            } else {
                if (json.hasOwnProperty('message')) {
                    return json.message;
                } else {
                    return json;
                }
            }
        }
        default: {
            return message;
        }
    }
};