import instance from "./auth";


export const getSections = async ({owner}) => {
  
  if (owner===undefined) {
    const {data} = await instance.get(`/sections`);
  return data
}
  else {
    
    const {data} = await instance.get(`/sections/${owner}`);
    return data;
  }
    
}

export const addSection = async (data) => {
    const {data: result} = await instance.post('/sections', data);
    return result;
}

export const deleteSection = async (_id) => {
    const {data} = await instance.delete(`/sections/${_id}`);
    return data;
}

export const updateSection = async (_id, section) => {
    // try {
        console.log("section", section)
      const { data} = await instance.put(`/sections/${_id}`, ...section);
      console.log("_id", _id)
    //   console.log("items", items)
    //   console.log("itemData", itemName)
      return data;
    // } catch (error) {
    //   throw error;;
    // }
  }