import instance from "./auth";


export const getContacts = async () => {
    const {data} = await instance.get('/contacts');
    return data;
}

export const addContacts = async (data) => {
    const {data: result} = await instance.post('/contacts', data);
    return result;
}

export const deleteContact = async (id) => {
    const {data} = await instance.delete(`/contacts/${id}`);
    return data;
}