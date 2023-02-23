import axios from "axios";
export const deleteData = (url, id, version) => {
  let result = axios
    .post(
      url,
      {
        records: [
          {
            id: id,
            version: version,
          },
        ],
      },
      {
        auth: {
          username: "admin",
          password: "admin",
        },
      }
    )
    .then((res) => {
      return res;
    });
  return result;
};
