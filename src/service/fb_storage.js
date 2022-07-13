import { fb_storage } from "./fb_config";

export const putStorage = async (ref, file) => {
  const storageRef = fb_storage.ref().child(`${ref}/${file.name}`);
  const response = await storageRef.put(file);
  return await response.ref.getDownloadURL();
};
