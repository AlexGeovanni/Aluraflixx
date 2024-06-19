import axios from "axios";

export const Api=axios.create({
    baseURL: "https://aluraflix.azurewebsites.net/",
    timeout: 500,
    headers: {
        'Content-Type': 'application/json'
      }
})

