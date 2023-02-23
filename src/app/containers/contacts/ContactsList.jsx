import styles from "./ContactsList.module.css";
import profile from "../../../../src/assets/images/profile.png"
import { useEffect, useState } from "react";
import EditDetail from "./EditDetails";
import { fetchData } from "../../services/FetchData";
import { deleteData } from "../../services/Delete";
function ContactsList() {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState();
  const [version, setVersion] = useState();
  const handleEditContact = (val, version) => {
    setView(true);
    setSelected(val);
    setVersion(version);
  };
  const handleDeleteContact = (id, version) => {
    deleteData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/removeAll",
      id,
      version
    );
  };
  useEffect(() => {
    fetchData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=30"
    ).then(function (result) {
      setData(result.data.data);
    });
  }, []);
  return (
    <div className={styles.list}>
      {view ? (
        <EditDetail data={data} id={selected} version={version} />
      ) : (
        data.map((val) => {
          return (
            <div key={val.id}className={styles.details}>
              <div>
                <img src={profile} alt="profile" className={styles.profile} />
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
    </div>
  );
}
export default ContactsList;
