import instance from "./auth";


export const getItems = async () => {
    const {data} = await instance.get('/items');
    return data;
}
export const getItemsLive = async (datas) => {
  // console.log(datas)
  const {data} = await instance.get(`/items/live/${datas}`);
  return data;
}


export const getItemsByCategory = async ({ category }) => {
  try {
    const { data } = await instance.get(`/items/${category}`);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    } else {
      throw error;
    }
  }
};

export const addItems = async (data) => {
    const {data: result} = await instance.post('/items', data);
    // console.log(data)
    return result;
}

export const deleteItem = async (_id) => {
    const {data} = await instance.delete(`/items/${_id}`);
    return data;
}
export const delItemsByCategory =  async (category) => {
  // console.log(category)
  const { data } = await instance.delete(`/items/${category}/remove`);
          return data;     
};
export const itemUpdate = async (_id, items) => {
    // try {
        // console.log("items", items)
      const { data} = await instance.patch(`/items/${_id}`, ...items);
      // console.log("_id", _id)
      // console.log("items", items)
    //   console.log("itemData", itemName)
      return data;
    // } catch (error) {
    //   throw error;;
    // }
  }
  export const imgUpdate = async (_id, items) => {
    // try {
        // console.log("FormData", items)
      const { data } = await instance.patch(`/items/${_id}`, items);
      // console.log("data", data)
      // console.log("items", items)
    //   console.log("itemData", itemName)
      return data;
    // } catch (error) {
    //   throw error;;
    // }
  }