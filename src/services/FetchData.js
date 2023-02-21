import axios from "axios";
export const fetchData = (url) => {
  let result = axios.get(
    url,
    {
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((res) => {
      return res;
    })
  return result;
};
