import { useState } from "react";
import styles from "../Form.module.css";
import { api } from "./Api";

function Form(props) {
  const id = props.id;
  const version = props.version;
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    contact: "",
  });
  const handleEdit = () => {
    setEdit(true);
    setState({
      firstName: props.data.find(findit).firstName,
      lastName: props.data.find(findit).lastName,
      dob: props.data.find(findit).dateOfBirth,
    });
  };
  const findit = (val) => {
    if (val.id === props.id) {
      return val;
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSaveChanges = (e) => {
    e.preventDefault();
    api.updateContact(state, id, version);
  };
  const handleSaveNewData = (e) => {
    e.preventDefault();
    api.createContact(
      state
    );
  };

  return (
    <form>
      {props.data ? (
        props.data.map((val, key) => {
          return (
            val.id === props.id &&
            (edit ? (
              <div key={key}>
                <input
                  type="text"
                  value={state.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={state.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                />
                <button onClick={handleSaveChanges}>Save</button>
              </div>
            ) : (
              <div key={key}>
                <span onClick={handleEdit} className={styles.edit}>
                  Edit
                </span>
                <p className={styles.name}>Name: {val.fullName}</p>
                <p className={styles.dob}> Date of Birth: {val.dateOfBirth}</p>
                <h3>Contacts</h3>
                <hr />
                <div className={styles.others}>
                  <span className={styles.email}>Emails: {val.email}</span>
                  <span className={styles.basicDetails}>
                    Phones: {val.phone}
                  </span>
                </div>
              </div>
            ))
          );
        })
      ) : (
        <>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder=" Email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Phone No."
            name="contact"
            onChange={handleChange}
            required
          />
          <button onClick={handleSaveNewData}>Save</button>
        </>
      )}
    </form>
  );
}
export default Form;
