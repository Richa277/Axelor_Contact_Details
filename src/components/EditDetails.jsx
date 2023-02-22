import { useEffect, useRef, useState } from "react";
import { PostData } from "../services/PostData";

function EditDetail(props) {
    const id=props.id;
    console.log(id)
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  //   const [selected, setSelected] = useState({});
  const [dob, setDob] = useState();
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
    setFirstName(props.data.find(findit).firstName);
    setLastName(props.data.find(findit).lastName);
    setDob(props.data.find(findit).dateOfBirth);
  };
  const findit = (o) => {
    if (o.id === props.id) {
      return o;
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
  }
  const handleSave=(e)=>{
  e.preventDefault();
  const response=PostData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/"+id,
firstName,
lastName,
dob,
id
  );
  response.then(function(result){
    console.log("result")
  })
  .catch(function(error){
    console.log("error")
  })
  }

  return (
    <form>
      {props.data.map((val, key) => {
        return (
          val.id === props.id &&
          (edit ? (
            <div key={key}>
              <input type="text" value={firstName} onChange={handleFirst} />
              <input type="text" value={lastName} onChange={handleLast}  />
              <input type="date" value={dob} onChange={handleDob} />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div key={key}>
              <button onClick={handleEdit}>Edit</button>
              <span>Name: {val.fullName}</span>
              <p> Date of Birth: {val.dateOfBirth}</p>
              <div>
                <h4>Contacts</h4>
                <span>Emails: {val.email}</span>
                <span>Phones: {val.phone}</span>
              </div>
            </div>
          ))
        );
      })}
    </form>
  );
}
export default EditDetail;
