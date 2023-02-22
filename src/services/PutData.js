import axios from "axios";
export const putData = (url, firstName, lastName, email, contact) => {
  let result = axios
    .put(
      url,
      {
        data: {
          firstName: firstName,
          lastName: lastName,
          emails: [{ email: email }],
          phones: [{ phone: contact }],
        },
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
