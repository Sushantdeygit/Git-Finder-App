import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})