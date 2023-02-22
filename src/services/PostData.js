import axios from "axios";

export const PostData = (url, firstName, lastName, dob, id, version) => {
  let result = axios
    .post(
      url,
      {
        data: {
          id: id,
          version: version,
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dob,
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
