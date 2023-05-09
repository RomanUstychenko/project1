import axios from "axios";

const instance = axios.create({
    baseURL: "https://rest-api-back.onrender.com/api",
});


export const getAllUsers = async () => {
    try {
        
        const { data } = await instance.get("/users/")
        console.log("data", data)
        return data
     } catch (error) {
        throw error;
    }
}