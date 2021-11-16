export const requestXHR = (url, options = {}) => {
    let { rawResult = false, method = "get", data = {} } = options;
    return new Promise((resolve, reject) => {
        var oReq = new XMLHttpRequest();

        oReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var result = this.responseText;
                if (!rawResult) result = JSON.parse(result);

                resolve(result);
            }
        };

        oReq.onerror = function (err) {
            console.log("XHR Fetch Error: ", err);
            resolve(null);
        }

        oReq.open(method, url, true);
        oReq.withCredentials = false; // need this to enable cookie accept/send (even in login)

        if (method === "post") {
            let params = "";

            if (data) {
                let dataset = [];
                for (const key in data) {
                    const value = encodeURIComponent(data[key]);
                    dataset.push(`${key}=${value}`);
                }

                if (dataset) params = dataset.join("&");
            }

            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            oReq.send(params);
        } else oReq.send();
    });
};

export const lsRead = (name, json_decode = false) => {
    let value = localStorage.getItem(name);
    value = value === null ? '' : value;

    if (json_decode && value !== '') value = JSON.parse(value);

    if (value === undefined) {
        value = '';
        if (json_decode) value = [];
    }

    return value;
}

export const lsStore = (name, value, json_encode = false) => {
    if (value === undefined) value = ''


    if (json_encode) value = JSON.stringify(value);
    localStorage.setItem(name, value);
}
export const lsExist = (name) => {
    let value = localStorage.getItem(name);
    return value === null ? false : true;
}
export const lsDelete = name => localStorage.removeItem(name)

export const verifyJson = x => x.indexOf('{') === 0
