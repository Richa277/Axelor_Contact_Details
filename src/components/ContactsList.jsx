import styles from "./ContactsList.module.css";
import profile from "../download.png";
import { useState } from "react";
import EditDetail from "./EditDetails";
function ContactsList(props) {
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState();
  const handleContact = (val) => {
    setView(true);
    setSelected(val);
  };
  return (
    <div className={styles.list}>
      {view ? (
        <EditDetail data={props.data} id={selected} />
      ) : (
        props.data.map((val, key) => {
          return (
            <div
              key={key}
              className={styles.details}
              onClick={() => handleContact(val.id)}
            >
              <div>
                <img src={profile} alt="profile" className={styles.profile} />
                <p>{val.fullName}</p>
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
