import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})