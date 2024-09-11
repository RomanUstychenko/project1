import instance from './auth';

export const getAllUsers = async () => {
  try {
    const { data } = await instance.get('/users/');
    return data;
  } catch (error) {
    throw error;
  }
};
