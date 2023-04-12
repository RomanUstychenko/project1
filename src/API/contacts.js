import instance from "./auth";


export const getContacts = async () => {
    const {data} = await instance.get('/contacts');
    return data;
}

export const addContacts = async (data) => {
    const {data: result} = await instance.post('/contacts', data);
    console.log(data)
    return result;
}

export const deleteContact = async (_id) => {
    const {data} = await instance.delete(`/contacts/${_id}`);
    return data;
}