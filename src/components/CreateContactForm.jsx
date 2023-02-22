import { useState } from "react";
import { putData } from "../services/PutData";

function CreateContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact,setContact]=useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContact=(e)=>{
     setContact(e.target.value)
  }
  const handleSave = (e) => {
    e.preventDefault();
    const response = putData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact",
      firstName,
      lastName,
      email,
      contact
    );
    response
      .then(function (result) {
        console.log("result");
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstName}
        />
        <input type="text" placeholder="Last name" onChange={handleLastName} />
        <input type="email" placeholder=" Email" onChange={handleEmail} />
        <input type="number" placeholder="Phone No." onChange={handleContact}/>
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}
export default CreateContactForm;
