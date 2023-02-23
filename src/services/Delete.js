import axios from "axios";
export const deleteData = (url, id, version) => {
  let result = axios
    .delete(url, {
      auth: {
        username: "admin",
        password: "admin",
      },
      data: {
        id: id,
        version: version,
      },
    })
    .then((res) => {
      return res;
    });
  return result;
};
