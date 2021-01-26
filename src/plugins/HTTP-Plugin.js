
const HTTP = async function(endPoint, customConfig) {
    return fetch(`${process.env.VUE_APP_API_URL}/${endPoint}`, customConfig);
}
export default HTTP.install = function (Vue) {
    Vue.prototype.$http = HTTP;
}
