import axios from "axios";
export const fetch = (url) => {
  let result = axios
    .get(url, {
      auth: {
        username: "admin",
        password: "admin",
      },
    })
    .then((res) => {
      return res;
    });
  return result;
};
export const editData = (url, firstName, lastName, dob, id, version) => {
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
export const createData = (url, firstName, lastName, email, contact) => {
  let result = axios
    .post(
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
