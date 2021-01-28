import axios from 'axios'
const request  = (params) => {
    const baseUrl = '192.168.2.217:5000/api' // https://api.qq.jsososo.com 192.168.2.217:5000
    const url = baseUrl + params.url
    return axios.get(url,{params: params.data})
}
export default request