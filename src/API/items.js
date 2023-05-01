import instance from "./auth";


export const getItems = async () => {
    const {data} = await instance.get('/items');
    return data;
}


export const getItemsByCategory =  async ({category}) => {
    console.log(category)
    const { data } = await instance.get(`/items/${category}`);
            return data;     
};

export const addItems = async (data) => {
    const {data: result} = await instance.post('/items', data);
    console.log(data)
    return result;
}

export const deleteItem = async (_id) => {
    const {data} = await instance.delete(`/items/${_id}`);
    return data;
}
export const itemUpdate = async (_id, items) => {
    // try {
        console.log("items", items)
      const { data} = await instance.put(`/items/${_id}`, ...items);
      console.log("_id", _id)
      console.log("items", items)
    //   console.log("itemData", itemName)
      return data;
    // } catch (error) {
    //   throw error;;
    // }
  }