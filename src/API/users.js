// import axios from "axios";

// const instance = axios.create({
//     baseURL:  "http://localhost:3001/api" || "https://rest-api-back.onrender.com/api",
//     // baseURL: `http://localhost:3000/api`,
// });

import instance from "./auth";


export const getAllUsers = async () => {
    try {
        
        const { data } = await instance.get("/users/")
        console.log("data", data)
        return data
     } catch (error) {
        throw error;
    }
}