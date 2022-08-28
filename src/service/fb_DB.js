import { fb_DB } from "./fb_config";

export const setDB = async (ref, data) => {
  await fb_DB.ref(ref).set(data);
};

export const updateDB = async (ref, data) => {
  await fb_DB.ref().child(ref).update(data);
};

export const updateDBwithPK = async (ref, data) => {
  const updates = {};
  const newPostKey = fb_DB.ref().child(ref).push().key;
  updates[`/${ref}/` + newPostKey] = data;
  await fb_DB.ref().update(updates);
  return newPostKey;
};

export const removeDB = async (ref) => {
  await fb_DB.ref(ref).remove();
};

export const syncDB = async (ref, onUpdate) => {
  const dbRef = fb_DB.ref(ref);
  dbRef.on("value", (snapshot) => {
    const data = snapshot.val();
    data && onUpdate(data);
  });
  return dbRef.off;
};
