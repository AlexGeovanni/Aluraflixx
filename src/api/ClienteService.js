import axios from "axios";

export const Api=axios.create({
    baseURL: "https://aluraflix.azurewebsites.net/",
    timeout: 100,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
})

