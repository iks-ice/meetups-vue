const httpClient = async (endPoint, customConfig) => {
    return fetch(`${process.env.VUE_APP_API_URL}/${endPoint}`, customConfig);
}

export default httpClient;