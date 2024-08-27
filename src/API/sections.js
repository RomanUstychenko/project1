import instance from "./auth";


export const getSections = async (datas) => {
  ///////// For User Page /////////////////
  const hasDigits = /\d/.test(datas);
  console.log("data", datas)
  console.log("data", hasDigits)
  if (hasDigits=== false) {
    const {data} = await instance.get(`/sections`);

    
    const filteredSections = data.filter(section => 
      section.menuOptions === datas
  );

  console.log("filteredSections", filteredSections);

    console.log("getSections data owner===undefined", datas)
  return {filteredSections, data}
}
///////// For Live Page /////////////////
  else {
    
    const {data} = await instance.get(`/sections/${datas}`);
    console.log("getSections data owner!=undefined", datas)
    console.log("data", data)
    return {data};
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
      const { data} = await instance.patch(`/sections/${_id}`, ...section);
      console.log("updateSection data", data)
    //   console.log("items", items)
    //   console.log("itemData", itemName)
      return data;
    // } catch (error) {
    //   throw error;;
    // }
  }