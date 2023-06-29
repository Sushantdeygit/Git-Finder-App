import axios from "axios";
const accessToken="ghp_XkmZ07HyIlpgJLms1FdkoKSdKBHCIC3J";



 export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
})