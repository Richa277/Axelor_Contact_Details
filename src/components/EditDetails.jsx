import { useState } from "react";
import { editData } from "../services/EditData";
import styles from "./EditDetails.module.css";

function EditDetail(props) {
  const id = props.id;
  const version = props.version;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
    setFirstName(props.data.find(findit).firstName);
    setLastName(props.data.find(findit).lastName);
    setDob(props.data.find(findit).dateOfBirth);
  };
  const findit = (val) => {
    if (val.id === props.id) {
      return val;
    }
  };
  const handleFirst = (e) => {
    setFirstName(e.target.value);
  };
  const handleLast = (e) => {
    setLastName(e.target.value);
  };
  const handleDob = (e) => {
    setDob(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    editData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/" + id,
      firstName,
      lastName,
      dob,
      id,
      version
    );
  };

  return (
    <form className={styles.selectedContact}>
      {props.data.map((val, key) => {
        return (
          val.id === props.id &&
          (edit ? (
            <div key={key}>
              <input type="text" value={firstName} onChange={handleFirst} />
              <input type="text" value={lastName} onChange={handleLast} />
              <input type="date" value={dob} onChange={handleDob} />
              <button onClick={handleSave}>Save</button>
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
