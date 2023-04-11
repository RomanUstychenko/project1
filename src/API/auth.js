import axios from "axios";

const instance = axios.create({
    baseURL: "https://rest-api-back.onrender.com/api",
});

const setToken = (token) => {
    if (token) {
    return instance.defaults.headers.common.authorization = `Bearer ${token}`;
}
instance.defaults.headers.common.authorization = "";
}

export const register = async (registerData) => {
    const { data } = await instance.post("/users/register", registerData);
    console.log("name, email", data)
    console.log(registerData)
    instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    console.log("token", data)
    instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data;
}

export const logout = async () => {
    const { data } = await instance.post("/users/logout");
    return data;
}

export const getCurrentUser = async (token) => {
    try {
        setToken(token);
        
        const { data } = await instance.get("/users/current")
        console.log("email, name, verify", data)
        return data
     } catch (error) {
        setToken()
        throw error;
    }
}
  export default instance;