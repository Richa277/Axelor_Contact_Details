import { useState } from "react";
import { editData } from "../../services/EditData";
import styles from "./EditDetails.module.css";

function EditDetail(props) {
  const id = props.id;
  const version = props.version;
  const [state, setState] = useState({ firstName: "", lastName: "", dob: "" });
  const [edit, setEdit] = useState(false);

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

  const handleSaveChanges = (e) => {
    e.preventDefault();
    editData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/" + id,
      state.firstName,
      state.lastName,
      state.dob,
      id,
      version
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  return (
    <form className={styles.selectedContact}>
      {props.data.map((val, key) => {
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
                value={state.dob}
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
                <span className={styles.basicDetails}>Phones: {val.phone}</span>
              </div>
            </div>
          ))
        );
      })}
    </form>
  );
}
export default EditDetail;
