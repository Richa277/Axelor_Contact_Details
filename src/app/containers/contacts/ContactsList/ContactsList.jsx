import styles from "./ContactsList.module.css";
import profile from "../../../../../src/assets/images/profile.png";
import { useEffect, useState } from "react";
import Form from "../Form";
import { api } from "../Api";
import Loader from "react-js-loader";
function ContactsList() {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState({ id: "", version: "" });
  const [create, setCreate] = useState(false);

  const handleAddNewContact = () => {
    setCreate(true);
  };

  const handleEditContact = (val, version) => {
    setView(true);
    setSelected({ ...selected, id: val, version: version });
  };
  const handleDeleteContact = (id, version) => {
    api.deleteContact(id, version);
  };
  useEffect(() => {
    api.fetchContacts().then(function (result) {
      setData(result.data.data);
    });
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        <>
          <button onClick={handleAddNewContact} className={styles.add}>
            New Contact
          </button>
          {create ? (
            <Form />
          ) : view ? (
            <Form data={data} id={selected.id} version={selected.version} />
          ) : (
            data.map((val) => {
              return (
                <div key={val.id} className={styles.details}>
                  <div>
                    <img
                      src={profile}
                      alt="profile"
                      className={styles.profile}
                    />
                    <p>{val.fullName}</p>
                    <button
                      onClick={() => handleDeleteContact(val.id, val.version)}
                      className={styles.delete}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEditContact(val.id, val.version)}
                      className={styles.edit}
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    {val.email ? (
                      <p>
                        <span className={styles.email}>Email: </span>
                        {val.email}
                      </p>
                    ) : (
                      <p></p>
                    )}
                    {val.phone ? (
                      <p>
                        <span className={styles.phone}>Phone: </span>
                        {val.phone}
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </>
      ) : (
        <Loader
          type="spinner-circle"
          bgColor={"green"}
          title={"spinner-circle"}
          size={200}
        />
      )}
    </div>
  );
}
export default ContactsList;
