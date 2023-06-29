import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})