import instance from "./auth";


export const getSections = async () => {
    const {data} = await instance.get('/sections');
    return data;
}

export const addSection = async (data) => {
    const {data: result} = await instance.post('/sections', data);
    return result;
}

export const deleteSection = async (_id) => {
    const {data} = await instance.delete(`/sections/${_id}`);
    return data;
}