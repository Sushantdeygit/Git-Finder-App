import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})