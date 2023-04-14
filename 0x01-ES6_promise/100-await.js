import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
