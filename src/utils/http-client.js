
const http = async (endPoint, {body, ...customOptions}={}) => {
    const url = new URL(`${process.env.VUE_APP_API_URL}${endPoint}`);
    const options = {
        method: body ? "POST" : "GET",
        ...(body && {body: JSON.stringify(body)}),
        ...customOptions,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...customOptions.headers,
        },
    }
    console.log(`request sent to ${url} with options`, options);
    return fetch(url, options)
        .then(async res => {
            const data = await res.json();
            if(res.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
}

export default http;
