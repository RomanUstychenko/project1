import instance from "./auth";


export const getItems = async () => {
    const {data} = await instance.get('/items');
    return data;
}

export const addItems = async (data) => {
    const {data: result} = await instance.post('/items', data);
    console.log(data)
    return result;
}

export const deleteItem = async (_id) => {
    const {data} = await instance.delete(`/items/${_id}`);
    return data;
}