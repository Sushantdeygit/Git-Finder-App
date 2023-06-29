import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})