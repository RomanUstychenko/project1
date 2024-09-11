import instance from './auth';

export const getSections = async sections => {
  ///////// For User Page /////////////////
  const hasDigits = /\d/.test(sections);
  if (hasDigits === false) {
    const { data } = await instance.get(`/sections`);
    const filteredSections = data.filter(
      section => section.menuOptions === sections
    );
    return { filteredSections, data };
  }
  ///////// For Live Page /////////////////
  else {
    const { data } = await instance.get(`/sections/${sections}`);
    return { data };
  }
};

export const addSection = async data => {
  const { data: result } = await instance.post('/sections', data);
  return result;
};

export const deleteSection = async _id => {
  const { data } = await instance.delete(`/sections/${_id}`);
  return data;
};

export const updateSection = async (_id, section) => {
  const { data } = await instance.patch(`/sections/${_id}`, ...section);
  return data;
};
