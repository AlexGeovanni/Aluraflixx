import axios from "axios";

export const Api=axios.create({
    baseURL: "https://api-alurafliix.azurewebsites.net/",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
})

