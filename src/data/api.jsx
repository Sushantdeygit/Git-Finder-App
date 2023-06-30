import axios from "axios";
const accessToken="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";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})