import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})