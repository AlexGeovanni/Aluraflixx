import axios from "axios";

export const Api=axios.create({
    baseURL: "https://api-alurafliix-production.up.railway.app/",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
})

