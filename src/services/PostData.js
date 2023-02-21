import axios from "axios";
export const postData = (url, firstName, lastName, email) => {
  let result = axios
    .post(url, {
      auth: {
        username: "admin",
        password: "admin",
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        emails: [{ email: email }],
      },
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "30",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res;
    });
  return result;
};
